import React, { useEffect } from "react";
import { Box, Text, Divider, Flex } from "@chakra-ui/react";

const IncomeTaxActMain = () => {
  useEffect(() => {
    // Disable copy and paste functionality
    const handleCopy = (e) => {
      e.preventDefault();
    };

    const handlePaste = (e) => {
      e.preventDefault();
    };

    // Attach event listeners
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <Box>
      {/* Chapter Title */}
      <Text
        fontSize="lg"
        mt="48px"
        mb="4"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        CHAPTER 332
      </Text>

      {/* Act Title */}
      <Text
        fontSize="lg"
        mb="4"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        THE INCOME TAX ACT
      </Text>

      {/* Divider */}
      <Divider
        mb="10px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* Description Paragraph */}
      <Text
        fontSize="md"
        mt="6"
        mb="6"
        textAlign="center"
        color="gray.600"
        fontWeight="bold"
      >
        An Act to make provision for the charge, assessment and collection of
        Income Tax, for the ascertainment of the income to be charged and for
        matters incidental thereto.
      </Text>

      {/* Acts Numbers and Date */}
      <Flex justify="space-between" mt="6">
        <Box textAlign="left" color="gray.800">
          <Text>Acts Nos:</Text>
          <Text>11 of 2004</Text>
          <Text>15 of 2004</Text>
          <Text>13 of 2005</Text>
          <Text>6 of 2006</Text>
          <Text>16 of 2007</Text>
          <Text>13 of 2008</Text>
          <Text>1 of 2008</Text>
          <Text>14 of 2009</Text>
          <Text>15 of 2010</Text>
          <Text>5 of 2011</Text>
        </Box>

        <Box textAlign="right" color="gray.800">
          <Text>[1st July, 2004]</Text>
          <Text>s.1</Text>
        </Box>
      </Flex>

      {/* PART I */}
      <Text
        fontSize="lg"
        mt="48px"
        mb="0"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        PART I
      </Text>

      {/* Preliminary */}
      <Text
        fontSize="lg"
        mb="4"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        PRELIMINARY
      </Text>

      {/* Short Title */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Short title
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="left" w="80%">
          1. This Act may be cited as the Income Tax Act.
        </Text>
      </Flex>

      {/* Application */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Application
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="left" w="80%">
          2. This Act shall apply to Tanzania Mainland as well as Tanzania
          Zanzibar.
        </Text>
      </Flex>

      {/* Interpretation */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Interpretation
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="left" w="80%">
          3. In this Act, unless the context requires otherwise -
        </Text>
      </Flex>

      {/* Act No.7 of 1994 s.8 */}
      {/* amended by TAA, 2014 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Act No.7 of 1994 s.8
          <br />
          <Text as="span" fontSize="md" color="red.500">
            amended by TAA, 2014
          </Text>
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            "adjusted assessment" means an assessment adjusted in accordance
            with section 96;
          </Text>
          “adjusted assessment” means an assessment adjusted in accordance with
          section 48 of The Tax Administration Act,”
        </Text>
      </Flex>

      {/* Finance Act No.8 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          “agent of a non-resident person or of a beneficial owner” includes any
          person in the United Republic-
          <Text fontSize="md" mt="2">
            &ensp;(a) who is employed by or on behalf of a non-resident person
            or a beneficial owner;
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(b) who has any business connection with a non-resident person
            or a beneficial owner;
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(c) from or through whom a nonresident person or a beneficial
            owner is in receipt of any income, whether directly or indirectly;
            &ensp;or
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(d) who is a trustee of a non-resident person, and includes
            any other person who, whether a resident or non-resident, has
            &ensp;acquired by means of a transfer, a capital asset situated in
            the United Republic;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act 2022 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act 2022
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          “alternative financing arrangement” means any financial arrangement
          approved by the Bank of Tanzania other than conventional financial
          arrangements;
          <Text fontSize="md" mt="2">
            "amount derived" means a payment received by a person or that the
            person is entitled to receive;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2017 s. 17 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 4 of 2017 s. 17
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          “an entity of a public character” means an entity established and
          functions solely for a public purpose and which operates in such a way
          that:
          <Text fontSize="md" mt="2">
            &ensp;(a) its membership is open to the general public or an
            identifiable group of a community with common interests;
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(b) it operates for purposes other than deriving profit or
            gain;
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(c) it does not allow any distribution or deemed distribution
            of profit generated out of its charitable business; and
          </Text>
          <Text fontSize="md" mt="2">
            &ensp;(d) its profit is ploughed back and used solely for improving
            or expansion of the original charitable purpose or function;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No 4 of 2018 s. 23 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          Finance Act No 4 of 2018 s. 23
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "approved retirement fund" means a resident retirement fund having a
          ruling under{" "}
          <Text as="span" textDecoration="line-through">
            section 131
          </Text>
          <Text as="span" color="blue.500">
            {" "}
            section 11 of the Tax Administration Act;
          </Text>
          <Text fontSize="md" mt="2">
            “arrangement” includes an action, agreement, course of conduct,
            dealing, promise, transaction, understanding or undertaking, whether
            express or implied, whether or not enforceable by legal proceedings
            and whether unilateral or involving more than one person;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 6 of 2024 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          Finance Act No. 6 of 2024
        </Text>
        <Text fontSize="md" color="blue.500" textAlign="left" w="80%">
          “artisanal miner” means a person who acquires mineral, and includes
          laborers in mining activities other than a holder of any licence under
          the Mining Act;
          <Text
            fontSize="md"
            mt="2"
            color="red.500"
            textDecoration="line-through"
          >
            "assessment" means an assessment under section 94, 95, 96 or 103;
          </Text>
          <Text fontSize="md" mt="2" color="red.500">
            “Assessment” means an assessment made in terms of Section 94 of this
            Act or sections 46, 47,48 or 81 of the Tax Administration Act,”
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 6 of 2024 */}
      <Flex mt="6" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          Finance Act No. 6 of 2024
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "asset" means a tangible or intangible asset and includes currency,
          goodwill, know-how,{" "}
          <Text as="span" color="blue.500">
            digital asset,
          </Text>{" "}
          property, a right to income or future income and a part of an asset;
          <Text fontSize="md" mt="2" color="gray.800">
            "associate" in relation to a person, means another person where the
            relationship between the two is -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &ensp;(a) that of an individual and a relative of the individual,
            unless the Commissioner is satisfied that it is not reasonable to
            expect that either individual will act in accordance with the
            intentions of the other;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &ensp;(b) that of partners in the same partnership, unless the
            Commissioner is satisfied that it is not reasonable to expect that
            either person will act in accordance with the intentions of the
            other;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &ensp;(c) that of an entity and -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &ensp;&ensp;(i) a person who -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;&emsp;(aa) either alone or together with an associate or
            associates under another application of this definition; and
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          &emsp;&emsp;(bb) whether directly or through one or more interposed
          entities,
          <Text as="span" fontSize="md" textDecoration="line-through">
            controls or may benefit from 50 percent or more of the rights to
            income or capital or voting power of the entity; or
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          controls or may benefit from 25 percent or more of the rights to
          income or capital or voting power of the entity, except that the
          Commissioner may, upon consideration of the nature of business or
          investment of a person, determine the prescribed minimum percentage;
          or
          <Text fontSize="md" mt="2" color="gray.800">
            &ensp;&ensp;(ii) under another application of this definition, is an
            associate of a person to whom subparagraph (i) applies; or
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          (d) in any case not covered by paragraphs (a) to (c), such that one
          may reasonably be expected to act, other than as employee, in
          accordance with the intentions of the other
          <Text as="span" fontSize="md" color="brown.800">
            whether or not they are in a business relationship and whether such
            intentions are communicated or not;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "banking business" means business of a financial institution
            approved under the Banking and Financial Institutions Act;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          "beneficial owner” means a natural person-
          <Text fontSize="md" mt="2" color="brown.800">
            (a) who directly or indirectly ultimately owns or exercises
            substantial control over an entity or an arrangement;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (b) who has a substantial economic interest in or receives
            substantial economic benefit from an entity or an arrangement
            directly or indirectly whether acting alone or together with other
            persons;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (c) on whose behalf a transaction or arrangement is conducted; or
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (d) who exercises significant control or influence over a person or
            arrangement through a formal or informal agreement;
          </Text>
        </Text>
      </Flex>

      {/* Section 59 of the Finance Act 2022 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="green.500" textAlign="left" w="20%">
          Section 59 of the Finance Act 2022
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "business" includes -
          <Text fontSize="md" mt="2" color="gray.800">
            (a) a trade, concern in the nature of trade, manufacture,
            profession, vocation or isolated arrangement with a business
            character; and
          </Text>
          <Text fontSize="md" mt="2" color="green.500">
            (b) a transaction or activity carried out through the internet or an
            electronic means including an electronic service or transaction
            conducted in the digital market place regardless of the manner in
            which such transaction is carried out;
          </Text>
        </Text>
      </Flex>

      {/* Section 17 of Finance Act no 4 of 2017 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Section 17 of Finance Act no 4 of 2017
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          (c) a past, present or prospective business, but excludes employment{" "}
          <Text
            as="span"
            fontSize="md"
            color="brown.800"
            textDecoration="line-through"
          >
            and any activity that, having regard to its nature and the principal
            occupation of its owners or underlying owners, is not carried on
            with a view to deriving profits;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "business asset" means an asset to the extent to which it is
            employed in a business and includes a membership interest of a
            partner in a partnership but excludes -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) trading stock or a depreciable asset;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) an interest in land held by an individual that has a market
            value of less than 10 million shillings at the time it is realised
            and that has been used for agricultural purposes for at least two of
            the three years prior to realization;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) the beneficial interest of a beneficiary in a resident trust;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (d) shares in a corporation where receipt of a dividend in respect
            of the shares is exempt in the hands of the shareholder under
            section 54(2); and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (e) shares and securities listed on the Dar es Salaam Stock Exchange
            that are owned by a resident person or by a non resident person who
            either alone or with other associates controls less than 25% of the
            controlling shares of the issuer company;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          “business connection” includes any business activity carried out
          through a person who, acting on behalf of the nonresident person or a
          beneficial owner-
          <Text fontSize="md" mt="2" color="brown.800">
            "business asset" means an asset to the extent to which it is
            employed in a business and includes a membership interest of a
            partner in a partnership but excludes -
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (a) has and habitually exercises in the United Republic, an
            authority to conclude contracts on behalf of the non-resident person
            or a beneficial owner;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (b) habitually concludes contracts or plays the principal role
            leading to conclusion of contracts by that nonresident person or a
            beneficial owner, and the contracts are-
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            &emsp;(i) whether or not in the name of the non-resident person or
            the beneficial owner;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            &emsp;(ii) for the transfer of the ownership of, or for the granting
            of the right to use property owned by that nonresident person, or
            &emsp;that nonresident person has the right to use; or
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            &emsp;(iii) for the provision of services by the non-resident person
            or the beneficial owner;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (c) has no such authority but habitually maintains in the United
            Republic a stock of goods or merchandise from which he regularly
            delivers goods or merchandise on behalf of the nonresident person or
            the beneficial owner;
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (d) habitually secures orders in the United Republic, mainly or
            wholly for the non-resident person or for that non-resident person
            and other non-resident persons controlling, controlled by, or
            subject to the same common control as that nonresident person, or
            for the beneficial owner; or
          </Text>
          <Text fontSize="md" mt="2" color="brown.800">
            (e) carries out any business or investment in the United Republic
            through an entity or an arrangement for economic benefit of a
            nonresident person or beneficial owner, whether directly or
            indirectly
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "capitalisation of profits" by an entity, includes a capitalisation
            by way of issuing bonus, membership interests or increasing the
            amount paid upon membership interests in the entity or otherwise
            crediting profits to a capital or premium account of the entity;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "certified public accountant in public practice" has the meaning
            ascribed to it by the Auditors and Accountants (Registrations) Act.;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "chargeable income" has the meaning ascribed to it by section 6;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "charitable organisation" has the meaning ascribed to it by section
            64;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "Class of depreciable assets” means a class determined in accordance
            with the provisions of paragraph 1 of the Third Schedule;
          </Text>
        </Text>
      </Flex>

      {/* S. 32A of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          S. 32A of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          “Commission” means the Commission of Minerals established under
          section 20 of the Mining Act,”
          <Text fontSize="md" mt="2" color="gray.800">
            "Commissioner" means the{" "}
            <Text
              as="span"
              fontSize="md"
              color="red.500"
              textDecoration="line-through"
            >
              {" "}
              Commissioner of Income Tax
            </Text>
            <Text as="span" fontSize="md" color="red.500">
              {" "}
              Commissioner General
            </Text>{" "}
            appointed under the Tanzania Revenue Authority Act; "commuted
            pension" means a payment received by an individual on retirement of
            the individual for the surrender of at least half of the
            individual's pension rights in respect of a retirement fund;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No.2 of 2014 s. 32(a) */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No.2 of 2014 s. 32(a)
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          textDecoration="line-through"
          w="80%"
        >
          "corporation" means any company or body corporate established,
          incorporated or registered under any law in force in the United
          Republic or elsewhere, an unincorporated association or other body of
          persons, a government, a political subdivision of a government, a
          parastatal organisation, a public international organisation and a
          unit trust but excludes a partnership;
        </Text>
      </Flex>

      {/* Finance Act No.2 of 2014 s. 32(a) */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No.2 of 2014 s. 32(a)
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "corporation" means any company or body corporate established,
          incorporated or registered under any law in force in the United
          Republic or elsewhere, an unincorporated association or other body of
          persons, a government, a political subdivision of a government, a
          public authority, public institution, a public international
          organisation and a unit trust but does not include partnership;
          <Text fontSize="md" mt="2" color="gray.800">
            “consumption expenditure” has the meaning ascribed to it by section
            11;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2013 s. 18, Finance Act no. 2 of 2016 s.17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          <Text fontSize="md" textDecoration="line-through">
            Finance Act No. 4 of 2013 s. 18
          </Text>
          Finance Act no. 2 of 2016 s.17
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            {" "}
            "contract area" in respect of petroleum operations means the area
            that is a subject of petroleum agreement and whenever any part of
            the contract area is relinguished pursuant to petroleum agreement,
            it represents the contract area as originally granted;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "controlled foreign trust" and "controlled foreign corporation"
            means a non-resident trust or corporation in which a resident person
            owns a membership interest, whether directly or indirectly through
            one or more interposed non-resident entities, and where-
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) the person is associated with the trust or corporation; or;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) there exist between one and four other resident persons which,
            if associated with the person, would cause the person to be
            associated with the trust or corporation;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "cost of an asset” has the meaning ascribed to it by section 37;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "debt claim" means an asset representing a right of one person to
            receive a payment from another person and includes a deposit with a
            financial institution, account receivable, note, bill of exchange or
            bond;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "debt obligation" means the obligation corresponding to a debt
            claim;
          </Text>
        </Text>
      </Flex>

      {/* FINANCE ACT NO. 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          FINANCE ACT NO. 2 OF 2016 S. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “decommissioning fund” with respect to petroleum operations means a
          fund established under the Petroleum Act;
          <Text fontSize="md" mt="2" color="gray.800">
            "dependant of an individual” with respect to a year of income, means
            a relative of the individual who has total income that does not
            exceed shillings 250,000 and receives substantial support from the
            individual during the whole year of income for the necessities of
            life;
          </Text>
        </Text>
      </Flex>

      {/* FINANCE ACT NO. 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          FINANCE ACT NO. 2 OF 2016 S. 17
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          "depreciable asset" means an asset employed wholly and exclusively in
          the production of income from a business, and which is likely to loose
          value because of wear and tear, obsolescence or the passing of time
          but excludes goodwill, an interest in land, a membership interest in
          an entity and trading stock
        </Text>
      </Flex>

      {/* FINANCE ACT NO. 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          FINANCE ACT NO. 2 OF 2016 S. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “depreciable asset” means an asset employed wholly and exclusively in
          the production of income from a business, and which is likely to lose
          value because of wear and tear, obsolescence or the passage of time
          but excludes goodwill, mineral or petroleum rights and other interest
          in land, a membership interest in an entity and trading stock;
          <Text fontSize="md" mt="2" color="gray.800">
            "depreciation basis" at the end of a year of income with respect to
            a pool of depreciable assets, has the meaning ascribed to it by
            paragraph 3 of the Third Schedule;
          </Text>
        </Text>
      </Flex>

      {/* FINANCE ACT NO 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          FINANCE ACT NO 2 OF 2016 S. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “development area” has the meaning ascribed to it under the Petroleum
          Act;
        </Text>
      </Flex>

      {/* FINANCE ACT NO 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          FINANCE ACT NO 2 OF 2016 S. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “development licence” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* FINANCE ACT NO 2 OF 2016 S. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          FINANCE ACT NO 2 OF 2016 S. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “development operations” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* FINANCE ACT 2022, FINANCE ACT NO. 6 OF 2024 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          <Text fontSize="md" color="green.500">
            FINANCE ACT 2022
          </Text>
          FINANCE ACT NO. 6 OF 2024
        </Text>
        <Text fontSize="md" color="blue.500" textAlign="left" w="80%">
          “digital content” means any electronic content that may be downloaded,
          streamed or accessed in any other manner, including e-books,
          magazines, news, journals, periodical, database, music, movie,
          software, mobile phone applications, images, text, sound effects,
          website, webinar, webcast, which is not simultaneously broadcasted
          over any conventional radio or television network in the United
          Republic;
        </Text>
      </Flex>

      {/* FINANCE ACT NO. 6 OF 2024 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          FINANCE ACT NO. 6 OF 2024
        </Text>
        <Text fontSize="md" color="blue.500" textAlign="left" w="80%">
          “digital content creator” means a person who produces digital content
          in formats that can be shared using a digital medium or platform over
          the internet”.
          <Text fontSize="md" mt="2" color="green.500">
            “digital market place” means a platform which enables direct
            interaction between buyers and sellers of electronic services;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “distribution” by an entity:
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) means –
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(i) a payment made by the entity to any of its members, in any
            capacity to the extent that the amount of the payment exceeds
            &emsp;the amount of any payment made by the member to the entity in
            return for the entity's payment; or
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(ii) any re-investment of dividends which enhances the value
            of shares
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(iii) any capitalisation of profits;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) includes a payment made by the entity to one of its members on
            cancellation, redemption or surrender of a membership interest in
            the entity, including as a result of liquidation of the entity or as
            a result of the entity purchasing a membership interest in itself;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) excludes a payment of the type referred to in paragraph (a) (i)
            or (b) -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(i) to the extent to which the payment is directly included in
            calculating the member's income or in calculating a final
            withholding payment, other than by reason of being a distribution;
            and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(ii) without limiting any amount treated as a distribution by
            paragraph (a)(ii), that consists of the issue of further membership
            interests in the entity to the entity's members in approximate
            proportion to the members' existing rights to share in dividends of
            the entity; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (d) in the case of a controlled foreign trust or corporation, is
            interpreted in accordance with section 75;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “dividend of an entity” means a distribution by the entity to the
            extent that it is not a repayment of capital;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s. 19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s. 19
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            “document” means a statement in writing, includes an account,
            assessment, book, certificate, claim, note, notice, order, fiscal
            receipt, fiscal invoice, manual receipt, record, return or ruling
            and may take an electronic form;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “domestic asset” means -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) an asset owned by a resident person (other than foreign land or
            buildings or an asset held by a foreign permanent establishment of
            the person) or held by a domestic permanent establishment;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) an interest in land or a building situated in the United
            Republic; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) shares in a resident corporation whether the owner of the shares
            together with associates controls or within the previous five years
            controlled, either directly or indirectly, 25 percent or more of the
            voting power in the corporation;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “domestic liability” means a liability owed by a resident person
            (other than a liability attributable to a foreign permanent
            establishment of the person) or attributable to a domestic permanent
            establishment;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “domestic permanent establishment” means all permanent
            establishments of a non-resident individual, partnership, trust or
            corporation situated in the United Republic;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17, Finance Act 2022 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
          <Text fontSize="md" color="green.500">
            Finance Act 2022
          </Text>
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “downstream activities” has the meaning ascribed to it under the
          Petroleum Act;
          <Text fontSize="md" mt="2" color="green.500">
            “electronic service” has the meaning ascribed to it under section 51
            of the Value Added Tax Act;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “employee” means an individual who is the subject of an employment
            conducted by an employer;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “employer” means a person who conducts, has conducted or has the
            prospect of conducting the employment of an individual;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “employment” means -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) a position of an individual in the employment of another person;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) a position of an individual as manager of an entity other than
            as partner of a partnership;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) a position of an individual entitling the individual to a
            periodic remuneration in respect of services performed; or
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (d) a public office held by an individual, and includes a past,
            present and prospective employment;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “entity” means a partnership, trust or corporation;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “excluded expenditure” has the meaning ascribed to it by section 11;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "exempt amount" means an amount exempt from income tax by reason of
          section 10, 52,{" "}
          <Text as="span" textDecoration="line-through">
            54,
          </Text>{" "}
          60 or 63;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “exploration area” has the meaning ascribed to it under the Petroleum
          Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “exploration licence” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “exploration operations” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “farm-out arrangement” with respect to a mineral right or a petroleum
          right includes an arrangement for the transfer of part of the right in
          return for consideration that includes in whole or in part an
          obligation on the part of the transferee to meet a disproportionate
          amount of future expenditure with respect to mineral operations or
          petroleum operations conducted with respect to the right, as the case
          requires;
          <Text fontSize="md" mt="2" color="gray.800">
            “final withholding payment” has the meaning ascribed to it by
            section 86;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “financial cost” means any amount payable under a financial instrument
          or a loss from the realisation of a financial instrument, includes the
          payment of interest but excludes a distribution by an entity;
          <Text fontSize="md" mt="2" color="gray.800">
            “financial institution” means a bank or financial institution
            approved under the Bank of Tanzania Act or the Banking and Financial
            Institutions Act;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "foreign currency debt claim" means a debt claim that is denominated
            in a currency other than Tanzanian shillings;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "foreign income tax ” means income tax imposed by a foreign country
            and includes a final withholding tax or branch profits tax imposed
            by a foreign country;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "foreign permanent establishment" means all permanent establishments
            of an individual, partnership, trust or corporation that are
            situated in any one country that is not the country in which the
            individual, partnership, trust or corporation is resident but
            excludes a domestic permanent establishment;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "foreign source" means an amount that is not treated as having a
            source in the United Republic by sections 67, 68 or 69, as the case
            requires;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2014 s.32 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 2 of 2014 s.32
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "full time service director" means a person at managerial position and
          is in full time service in a corporation;
          <Text fontSize="md" mt="2" color="gray.800">
            "gain" from the realisation of an asset or liability has the meaning
            ascribed to it by section 36;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "gift" means a payment without consideration or a payment with
            consideration to the extent that the market value of the payment
            exceeds the market value of the consideration;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "incapacitated individual" means a minor or any individual who is
            substantially blind or physically crippled or substantially mentally
            retarded or who is adjudged under any law, whether of the United
            Republic or of any other country, to be of unsound mind;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "income" -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) from an employment, business or investment has the meaning
            ascribed in sections 7, 8 or 9, as the case requires; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) when used without a reference to employment, business or
            investment, means a person's income from any employment, business or
            investment and an aggregation of such income as calculated in
            accordance with this Act, as the case requires;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          (c) in the case of corporation with unrelieved losses referred to
          under section 4(1)(a), the turnover of that corporation for the year
          of income.
          <Text fontSize="md" mt="2" color="gray.800">
            "income tax" has the meaning ascribed to it by section 4;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "incomings for an asset” has the meaning ascribed to it by section
            38;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "individual" means a natural person;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "insurance business" means the business of an insurer in effecting,
            issuing and carrying out insurance;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “interest” means a payment for the use of money and includes a
            payment made or accrued under a debt obligation that is not a
            repayment of capital, any gain realised by way of a discount,
            premium, swap payment or similar payment, amounts treated as
            interest under section 32, amounts recognised as interest under
            section 71(6) (b)(ii) and interest imposed under Division I of Part
            VIII;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "investment" means the owning of one or more assets of a similar
            nature or that are used in an integrated fashion, on similar terms
            and subject to similar conditions, including as to location and
            includes a past, present and prospective investment, but does not
            include a business, employment and the owning of assets, other than
            investment assets, for personal use by the owner;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "investment asset" means shares and securities in a corporation, a
          beneficial interest in a{" "}
          <Text as="span" textDecoration="line-through">
            non-resident
          </Text>{" "}
          trust and an interest in land and buildings but does not include -
          <Text fontSize="md" mt="2" color="gray.800">
            (a) business assets, depreciable assets and trading stock;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) a private residence of an individual that has been owned
            continuously for three years or more and lived in by the individual
            continuously or intermittently for a total of three years or more,
            other than a private residence that is realised for a gain in excess
            of 15,000,000 shillings;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) an interest in land held by an individual that has a market
            value of less than 10,000,000 shillings at the time it is realised
            and that has been used for agricultural purposes for at least two of
            the three years prior to realisation;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            (d) shares in a corporation where receipt of a dividend in respect
            of the shares is exempt in the hands of the shareholder under
            section 54(2); and
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          (d) shares
          <Text as="span" color="blue.500" textDecoration="line-through">
            {" "}
            and or{" "}
          </Text>
          securities listed on the Dar es Salaam Stock Exchange that are owned
          by a resident person or a nonresident person who either alone or with
          other associate controls less than 25% of the controlling shares of
          the issuer company;
          <Text fontSize="md" mt="2" color="gray.800">
            "lease" means an arrangement providing a person with a temporary
            right in respect of an asset of another person, other than money,
            and includes a licence, profit-a-prendre, option, rental agreement,
            royalty agreement and tenancy;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17, Finance Act No 4 s.17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
          <Text fontSize="md" color="brown.800">
            Finance Act No 4 s.17
          </Text>
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          “licence area”-
          <Text fontSize="md" mt="2" color="gray.800">
            (a) with respect to{" "}
            <Text as="span" color="red.500" textDecoration="line-through">
              {" "}
              mineral
            </Text>
            <Text as="span" color="brown.800">
              {" "}
              mining{" "}
            </Text>{" "}
            operations, means the area covered by the mineral right in question;
            and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) with respect to petroleum operations, means the exploration or
            development area with respect to which the operations are conducted;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2017 s.17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 4 of 2017 s.17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “licenced dealer” has a meaning ascribed to it in the Mining Act;
          <Text fontSize="md" mt="2" color="gray.800">
            (a) insurance where the specified event is the death of an
            individual who is the insured or an associate of the insured;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) insurance where -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(i) the specified event is an individual who is the insured or
            an associate of the insured sustaining personal injury or becoming
            &emsp;&emsp;incapacitated; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(ii) the insurance agreement is expressed to be in effect for
            at least five years or without limit of time and is not terminable
            by &emsp;&emsp;the insurer before the expiry of five years except in
            circumstances prescribed by the regulations;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) insurance under which an amount or series of amounts is to
            become payable to the insured in the future; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (d) re-insurance of insurance referred to under paragraphs (a) to
            (c);
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "life insurance business" means the business of an insurer in
            effecting, issuing and carrying out life insurance;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "loss from any business or investment” has the meaning ascribed to
            it by section 19 and from the realization of an asset or liability,
            has the meaning ascribed to it by section 36;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "manager" in relation to an entity -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) means any councillor, director, manager, member, officer or
            other person who participates or may participate, whether alone or
            jointly with other persons, in making senior management decisions on
            behalf of the entity; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) includes a partner of a partnership, a trustee of a trust and a
            person in accordance with whose directions and instructions the
            entity or a person described in paragraph
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) is required or accustomed to act;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "market value" means a market value determined under section 27;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “member” in relation to an entity, means any person who owns a
            membership interest in the entity;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "membership interest" in an entity means a right, including a
            contingent right and whether of a legal or equitable nature, to
            participate in any income or capital of the entity and includes the
            interest of a partner in a partnership, the interest of a
            beneficiary in a trust and shares in a corporation;
          </Text>
        </Text>
      </Flex>

      {/* Cap.123 Finance Act no 2 of 2016 s.17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Cap.123 <br />
          Finance Act no 2 of 2016 s.17
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “mineral” has a meaning ascribed to it under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “mineral” has the meaning ascribed to it under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “mineral rights” has the meaning ascribed to it under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “mining” means intentionally winning minerals and every method or
          process by which mineral is won;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “mining licence” means special mining licence, mining licence or
          primary mining licence defined as such under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2013 s.18 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          <Text fontSize="md" textDecoration="line-through">
            Finance Act No. 4 of 2013 s.18
          </Text>
          Finance Act no 2 of 2016 s.17
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          "mining area"means an area of land that is subject to special mining
          licence, a mining licence, or a primary mining licence;
        </Text>
      </Flex>

      {/* Finance Act no. 2 of 2016 s. 17, Cap.123 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act no 2 of 2016 s. 17
          <br />
          Cap.123
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “mining operations” means prospecting mining or operations connected
          with prospecting or mining carried out pursuant to rights granted
          under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “mining operations” means prospecting, mining or operations connected
          with prospecting or mining carried out pursuant to mineral rights
          granted under the Mining Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “midstream activities” has the meaning ascribed to it under the
          Petroleum Act;
          <Text fontSize="md" mt="2">
            "Minister" means the Minister responsible for finance;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "minor" with respect to a year of income means an individual under
            the age of eighteen years at the end of the year of income;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2013 s.18 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 4 of 2013 s.18
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "money transfer commission" means payment in respect of money transfer
          service paid or payable to a money transfer agent;
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2013 s.18 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 4 of 2013 s.18
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "money transfer agent" means any person rendering money transfer on
          behalf of money transfer service provider;
        </Text>
      </Flex>

      {/*         Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “National Oil Company” has the meaning ascribed to it under the
          Petroleum Act;
          <Text fontSize="md" mt="2" color="gray.800">
            "natural resource" means minerals, petroleum, water or any other
            nonliving or living resource that may be taken from land or the sea;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "natural resource payment" means any payment, including a premium or
            like amount, for the right to take natural resources from land or
            the sea or calculated in whole or part by reference to the quantity
            or value of natural resources taken from land or the sea;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “net cost” for an asset or liability to a particular time means -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) in the case of a depreciable asset, its share of the written
            down value of the pool to which it belongs at that time apportioned
            according to the market value of all the assets in the pool; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) in the case of any other asset or a liability, the amount by
            which cumulative costs for the asset or liability exceed cumulative
            incomings for the asset or liability to the time;`
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "net gains" from the realisation of investment assets of an
            investment of a person for a year of income has the meaning ascribed
            to it by section 36;
          </Text>
          <Text fontSize="md" mt="2" textDecoration="line-through">
            “notice of assessment” means a notice served under section 97 or
            103(4);
          </Text>
        </Text>
      </Flex>

      {/* Caps. 399 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Caps. 399
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "officer of the Tanzania Revenue Authority” means the Commissioner and
          any officer appointed under the Tanzania Revenue Authority Act;;
          <Text fontSize="md" mt="2">
            "parastatal organisation" means -
          </Text>
          <Text fontSize="md" mt="2">
            (a) a local authority of the United Republic;
          </Text>
          <Text fontSize="md" mt="2">
            (b) a body corporate established by or under any Act or Ordinance of
            the United Republic other than the Companies Act, and
          </Text>
        </Text>
      </Flex>

      {/* Cap. 212 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Cap. 212
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          (c) any company registered under the Companies Act where -
          <Text fontSize="md" mt="2">
            &emsp;(i) in the case of a company limited by shares, not less than
            50 percent of the issued share capital of the company is owned by
            &emsp;&emsp;the Government or an organisation which is a parastatal
            organisation under this definition; or
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;(ii) in the case of a company limited by guarantee-
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;&emsp;(aa) the members of the company include the Government
            or an organisation which is a parastatal organisation under this
            &emsp;&emsp;&emsp;&emsp;definition; and
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;&emsp;(bb) such members have undertaken to contribute not less
            than 50 percent of the amount to be contributed by members in
            &emsp;&emsp;&emsp;&emsp;the event of the company being wound up;
          </Text>
          <Text fontSize="md" mt="2">
            "partnership" means any association of individuals or bodies
            corporate carrying on business jointly, irrespective of whether the
            association is recorded in writing;
          </Text>
          <Text fontSize="md" mt="2">
            "payment" includes the transfer of assets or money, the transfer or
            decrease of a liability, the provision of services, the use or
            availability for use of money or an asset{" "}
            <Text fontSize="md" as="span" bgColor="yellow.300">
              and the creation of an asset in another person;
            </Text>
          </Text>
          <Text
            fontSize="md"
            mt="2"
            color="red.500"
            textDecoration="line-through"
          >
            "penalty" means a penalty imposed under Division I of Part VIII;
          </Text>
          <Text fontSize="md" mt="2">
            "permanent establishment" means a place where a person carries on
            business and includes -
          </Text>
          <Text fontSize="md" mt="2">
            (a) a place where a person is carrying on business through an agent,
            other than a general agent of independent status acting in the
            ordinary course of business as such;
          </Text>
        </Text>
      </Flex>

      {/* FINANCE ACT 2021 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="blue.500" textAlign="left" w="20%">
          FINANCE ACT 2021
        </Text>
        <Text fontSize="md" color="blue.500" textAlign="left" w="80%">
          “Provided that, where an agent other than an independent agent is
          acting on behalf of another person, that other person shall be deemed
          to have a permanent establishment if-
          <Text fontSize="md" mt="2">
            &emsp;(i) the agent other than independent agent has and habitually
            exercises authority to
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;(ii) conclude contracts or issues invoice on behalf of that
            other person, unless his activities are limited to the purchase of
            goods &emsp;&emsp;or merchandise for that other person;
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;(iii) the agent other than independent agent has no authority
            to conclude contracts, but habitually maintains stock of goods or
            &emsp;&emsp;merchandise from which he regularly delivers goods or
            merchandise on behalf of that other person; or
          </Text>
          <Text fontSize="md" mt="2">
            &emsp;(iv) the agent other than independent agent habitually secures
            orders, wholly or almost wholly for that other person or for the
            &emsp;&emsp;enterprise and other enterprises controlling, controlled
            by, or subject to the same common control, as that of that other
            &emsp;&emsp;person
          </Text>
          <Text fontSize="md" mt="2">
            (b) a place where a person has used or installed, or is using or
            installing substantial equipment or substantial machinery; and
          </Text>
          <Text fontSize="md" mt="2">
            (c) a place where a person is engaged in a construction, assembly or
            installation project for six months or more, including a place where
            a person is conducting supervisory activities in relation to such a
            project;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “perpetual loss corporation rules” means those rules set up by the
          definition of “income” in section 3 and sections 4(1)(a) and 6(1)(c)
          and paragraph 3(3) of the First Schedule;
          <Text fontSize="md" mt="2" color="gray.800">
            "person" means an individual or an entity;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 4 of 2013 s.18, Finance Act no 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          <Text fontSize="md" textDecoration="line-through">
            Finance Act No. 4 of 2013 s.18
          </Text>
          Finance Act no 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            "petroleum agreement" means a contract, licence, permit, or other
            authorization made or given pursuant to the applicable law and
            includes authorization or production sharing contract made under the
            respective law;
          </Text>

          <Text fontSize="md" mt="2" color="gray.800">
            "pool of depreciable assets of a person for a year of income” has
            the meaning ascribed to it by paragraph 1 of the Third Schedule;
          </Text>
        </Text>
      </Flex>

      {/* Cap.328 Finance Act no 2 of 2016 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Cap.328
          <br />
          Finance Act no 2 of 2016
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “petroleum” has the meaning ascribed to it under Petroleum
          (Exploration and Production Act, 1980;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “petroleum” has the meaning ascribed to it under the Petroleum Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “petroleum operations” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “petroleum right” means an exploration licence or a development
          licence granted under the Petroleum Act and includes-
          <Text fontSize="md" mt="2">
            (a) separately, the interest of a contractor under a Production
            Sharing Agreement with respect to each exploration licence granted
            with respect to the contract area;
          </Text>
          <Text fontSize="md" mt="2">
            (b) separately, the interest of a contractor under a Production
            Sharing Agreement with respect to each development licence granted
            with respect to the contract area; and
          </Text>
          <Text fontSize="md" mt="2">
            (c) data or information pertaining to petroleum operations;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “production operations” has the meaning ascribed to it under the
          Petroleum Act;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “Production Sharing Agreement” means-
          <Text fontSize="md" mt="2">
            (a) an agreement concluded under section 47 of the Petroleum Act
            between the Government of the United Republic, the National Oil
            Company and another person “the contractor”; and
          </Text>
          <Text fontSize="md" mt="2">
            (b) a tripartite agreement between the Government of the United
            Republic, the National Oil Company and a contractor under which the
            National Oil Company engages the contractor to carry out on its
            behalf petroleum operations in an exploration or development area
            with respect to an exploration or development licence held by the
            National Oil Company;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “prospecting” with respect to mineral right means prospecting
          operations as provided for under section 4 of the Mining Act and
          includes retention under retention licence;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “prospecting” with respect to a mineral right, has the meaning given
          in section 4 of the Mining Act and includes retention under a
          retention licence;
          <Text fontSize="md" mt="2">
            "realisation" of an asset has the meaning ascribed to it by section
            39, and of liability has the meaning ascribed to it under section
            40;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “prospecting” with respect to a mineral right, has the meaning given
          in section 4 of the Mining Act and includes retention under a
          retention licence;
          <Text fontSize="md" mt="2">
            “rehabilitation” with respect to a mineral operation or with respect
            to processing, smelting or refining minerals means abandonment
            activities and includes reclamation, rehabilitation, restoration and
            closure of the operation as required by law or under the terms of
            the relevant mineral right or development agreement;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17, Finance Act No 4 of 2017 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
          <Text fontSize="md" color="brown.800">
            Finance Act No 4 of 2017 s. 17
          </Text>
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “rehabilitation fund” with respect to{" "}
          <Text
            as="span"
            fontSize="md"
            color="brown.800"
            textDecoration="line-through"
          >
            mineral
          </Text>{" "}
          <Text as="span" fontSize="md" color="brown.800">
            mining
          </Text>{" "}
          operations or with respect to processing, smelting or refining
          minerals means a fund-
          <Text fontSize="md" mt="2">
            (a) required by law, a mineral right or under a development
            agreement and approved for that purpose by the Minister responsible
            for mining;
          </Text>
          <Text fontSize="md" mt="2">
            (b) which is established to meet expenses to be incurred in the
            course of rehabilitation of the operations including expenses under
            an approved mine closure plan; and
          </Text>
          <Text fontSize="md" mt="2">
            (c) where contributions to the fund are placed beyond the control of
            the person conducting the operations;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “rehabilitation bond” with respect of mining operation has the meaning
          ascribed to it by the Mining Act;
          <Text fontSize="md" mt="2" color="gray.800">
            "relative" means the individual’s child, spouse, parent,
            grandparent, grandchild, sibling, aunt, uncle, nephew, niece or
            first cousin, including by way of marriage or adoption;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            “religious organisation” means a resident entity of a public
            character established for the advancement religion that has been
            issued with ruling by the Commissioner under section 131 currently
            in force stating that, it is a religious organization;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "rent" means any payment made by the lessee under a lease of a
            tangible asset including any premium and any other payment for the
            granting of the lease but excludes a natural resource payment and a
            royalty;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "repatriated income" has the meaning ascribed to it under section
            72;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2020 s. 25 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="brown.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2020 s. 25
        </Text>
        <Text fontSize="md" color="brown.800" textAlign="left" w="80%">
          “representative assessee” means an agent of a non-resident person or
          of a beneficial owner;
          <Text fontSize="md" mt="2" color="gray.800">
            “residence” or “resident” with respect to a person has the meaning
            ascribed to it under section 66;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “retention licence” has the meaning ascribed to it under the Mining
          Act;
          <Text fontSize="md" mt="2" color="gray.800">
            "retirement contribution" means a payment made to a retirement fund
            for the provision or future provision of retirement payments;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "retirement fund" means any entity established and maintained solely
            for the purposes of accepting and investing retirement contributions
            in order to provide retirement payments to individuals who are
            beneficiaries of the entity;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "retirement payment" means a payment, by way of a lump sum, pension
            or commuted pension, made by a person to -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) an individual in the event of the individual's retirement; or
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) a relative of an individual in the event of the individual's
            death;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "return of income" has the meaning ascribed to it by section 91;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "royalty" means any payment made by the lessee under a lease of an
            intangible asset and includes payments for -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) the use of, or the right to use, a copyright, patent, design,
            model, plan, secret formula or process or trademark;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) the supply of know-how including information concerning
            industrial, commercial or scientific equipment or experience;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (c) the use of, or right to use, a cinematography film, videotape,
            sound recording or any other like medium;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (d) the use of, or right to use, industrial, commercial or
            scientific equipment;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (e) the supply of assistance ancillary to a matter referred to in
            paragraphs (a) to (d); or
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (f) a total or partial forbearance with respect to a matter referred
            to in paragraphs (a) to (e), but excludes a natural resource
            payment;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “separate mining operation” has the meaning ascribed to it under
          section 65C;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “separate petroleum operation” has the meaning ascribed to it under
          section 65L;
          <Text fontSize="md" mt="2" color="gray.800">
            “service” has the meaning ascribed to it under{" "}
            <Text fontSize="md" as="span" textDecoration="line-through">
              section 136
            </Text>{" "}
            <Text fontSize="md" as="span" color="red.500">
              sections 32 and 33 of the Tax Administration Act ;
            </Text>
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "service fee" means a payment to the extent to which, based on
            market values, it is reasonably attributable to services rendered by
            a person through a business of that person or a business of any
            other person and includes a payment for any theatrical or musical
            performance, sports or acrobatic exhibition or any other
            entertainment performed, conducted, held or given;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “service rendered” means transmitting or delivering of service in the
          United Republic of Tanzania irrespective of the place of performance
          of service;
        </Text>
      </Flex>

      {/* Finance Act No. 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act No. 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “special mining licence” has the meaning ascribed to it under the
          Mining Act;
          <Text fontSize="md" mt="2" color="gray.800">
            "shareholder" means a person who is a member of a corporation;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "source" has the meaning ascribed to it under sections 67, 68 or 69,
            as the case requires;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          "statutory rate" in relation to a calendar year means the Bank of
          Tanzania discount rate at the start of the year;
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "statutory rate" in relation to calendar year means the prevailing
          discount rate determined by the bank of Tanzania.
        </Text>
      </Flex>

      {/* Finance Act No. 8 of 2012 s.19 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No. 8 of 2012 s.19
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
          "strategic investor" means an investor who has been determined as such
          under the Tanzania Investment Act
        </Text>
      </Flex>

      {/* Cap.399 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Cap.399
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          <Text fontSize="md" textDecoration="line-through">
            "Tanzania Revenue Authority" means the Authority established under
            the Tanzania Revenue Authority Act;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "tax" has the meaning ascribed to it under section 78;
          </Text>
        </Text>
      </Flex>

      {/* section 113 of TAA, 2015 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          section 113 of TAA, 2015
        </Text>
        <Text
          fontSize="md"
          color="red.500"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “tax payable on an assessment” has the meaning ascribed to it under
          sections 94, 95 and 96;
          <Text fontSize="md" mt="2">
            "tax identification number" has the meaning ascribed to it by
            section 133;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No.2 of 2014 s.32 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No.2 of 2014 s.32
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “technical services” in respect of mining operations, means services
          in respect of earthmoving, engineering and construction and includes
          geological geotechnical and metallurgical services or any other like
          services;
        </Text>
      </Flex>

      {/* Finance Act No.2 of 2014 s.32, Finance Act no 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          <Text fontSize="md" textDecoration="line-through">
            Finance Act No.2 of 2014 s.32
          </Text>
          Finance Act no 2 of 2016 s. 17
        </Text>
        <Text
          fontSize="md"
          color="gray.800"
          textAlign="left"
          w="80%"
          textDecoration="line-through"
        >
          “technical services” in respect of mining, oil and gas operations,
          means services in respect of earthmoving, engeneering and construction
          and includes geological, geotechnical and metallurgical services,
          seismic survey, data interpretation, drilling or any such services;
        </Text>
      </Flex>

      {/* Finance Act no 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
          Finance Act no 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
          “technical service” in respect of mining or petroleum operations,
          means services in respect of earthmoving, engineering and construction
          and includes geological, geotechnical and metallurgical services,
          seismic survey, data interpretation, drilling or any such services;
          <Text fontSize="md" mt="2" color="gray.800">
            "total income" has the meaning ascribed to it under section 5 ;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "trading stock" means assets owned by a person that are sold or
            intended to be sold in the ordinary course of a business of the
            person, work in progress on such assets and inventories of materials
            to be incorporated into such assets and includes, in the case of a
            person carrying on a banking business, loans made in the ordinary
            course of that business;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            "trustee" -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (a) means an individual or body corporate holding assets in a
            fiduciary capacity for the benefit of identifiable persons or for
            some object permitted by law and whether or not the assets are held
            alone or jointly with other persons or the individual or body
            corporate is appointed or constituted trustee by personal acts, by
            will, by order or declaration of a court or by other operation of
            the law; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            (b) includes -
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(i) any executor, administrator, tutor or curator;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(ii) any liquidator, receiver, trustee in bankruptcy or
            judicial manager;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(iii) any person having the administration or control of
            assets subject to a usufruct, fideicommissum or other limited
            interest;
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(iv) any person who manages the assets of an incapacitated
            individual; and
          </Text>
          <Text fontSize="md" mt="2" color="gray.800">
            &emsp;(v) any person who manages assets under a private foundation
            or other similar arrangements;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act No.13 of 2008 s.13 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
          Finance Act No.13 of 2008 s.13
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%" textDecoration="line-through">
        “turnover\” in relation to a business of a resident individual for the
        year of income, means amounts to be included in calculating the
        individual’s income for the business for the year of income under
        section 8 without a deduction for any amount under Subdivision B of
        Division I of Part III.
        </Text>
      </Flex>

      {/* Finance Act No.13 of 2008 s.13 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="gray.800" textAlign="left" w="20%">
         Finance Act No.13 of 2008 s.13
        </Text>
        <Text fontSize="md" color="gray.800" textAlign="left" w="80%">
        "turnover" in relation to a business by a resident person for the year
        of income, means an amount to be included in calculating the person’s
        income under section 8 without deducting any amount under Subdivision D
        of Division I of Part II.

        <Text fontSize="md" mt="2" >
        "turnover" in relation to a business by a resident person for the year
        of income, means an amount to be included in calculating the person’s
        income under section 8 without deducting any amount under Subdivision D
        of Division I of Part II.
          </Text>
        <Text fontSize="md" mt="2" >
        "unapproved retirement fund" means a retirement fund that is not an
        approved retirement fund;
          </Text>
        </Text>
      </Flex>

      {/* Finance Act no 2 of 2016 s. 17 */}
      <Flex mt="2" alignItems="justify">
        <Text fontSize="md" color="red.500" textAlign="left" w="20%">
         Finance Act no 2 of 2016 s. 17
        </Text>
        <Text fontSize="md" color="red.500" textAlign="left" w="80%">
        upstream activities” has the meaning ascribed to it under the Petroleum
        Act.”

        <Text fontSize="md" mt="2" color="gray.800">
        "underlying ownership" -
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (a) in relation to an entity, means membership interests owned in
the entity, directly or indirectly through one or more interposed
entities, by individuals or by entities in which no person has a
membership interest; or
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (b) in relation to an asset owned by an entity, means the asset
owned by the persons having underlying ownership of the
entity in proportion to that ownership of the entity;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "trust" means an arrangement under which a trustee holds assets but
excludes a partnership and a corporation;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "unit trust" means -
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (a) an arrangement under which a trustee holds assets for the
        benefit of at least 20 persons; and 
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (b) where the entitlements of the persons to participate in the
income or capital of the arrangement are divided into units
such that the entitlements are determined by the number of
units owned;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "withholdee" means a person receiving or entitled to receive a payment
from which income tax is required to be withheld under Subdivision
A of Division II of Part VII;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "withholding agent" means a person required to withhold income tax from
        a payment under Subdivision A of Division II of Part VII;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "written down value" of a pool of depreciable assets-
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (a) at the end of a year of income has the meaning ascribed to it
        under paragraph 3(4) of the Third Schedule;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        (b) at a particular time ("the time") during a year of income
        means-
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
&emsp;(i) the written down value of the pool at the end of the
previous year of income; plus
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
&emsp;(ii) expenditure incurred prior to the time, which is added to
the depreciation basis of the pool during the year of
income or to &emsp;&emsp;be added during the following year of
income under paragraph 3(5) of the Third Schedule; less
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
&emsp;(iii)incomings derived during the year of income or to be
derived with respect to a realisation occurring prior to the
time in &emsp;&emsp;&ensp;respect of assets that are or have been in the pool;
          </Text>
        <Text fontSize="md" mt="2" color="gray.800">
        "year of income" has the meaning ascribed to it under section 20.
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default IncomeTaxActMain;
