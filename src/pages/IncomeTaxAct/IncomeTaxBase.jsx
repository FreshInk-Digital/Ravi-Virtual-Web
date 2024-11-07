import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const IncomeTaxBase = () => {
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
      {/* PART III */}
      <Text
        fontSize="lg"
        mt="48px"
        mb="0"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        PART III
      </Text>

      {/* INCOME TAX BASE */}
      <Text
        fontSize="lg"
        mb="4"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        INCOME TAX BASE
      </Text>

      {/* Division I: Calculating the Income Tax Base */}
      <Text
        fontSize="md"
        mt="4"
        textAlign="center"
        color="gray.800"
        textTransform="capitalize"
      >
        Division I: Calculating the Income Tax Base
      </Text>

      {/* Subdivision A: Total Income */}
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision A: Total Income
      </Text>

      {/* Total income */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Total income
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          5.-
        </Text>
        (1) The total income of a person shall be the sum of the person's
        chargeable income for the year of income from each employment, business
        and investment less any reduction allowed for the year of income under
        section 61 relating to retirement contributions to approved retirement
        funds.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) The total income of each person shall be determined separately.
      </Text>

      {/* Subdivision B: Chargeable Income */}
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision B: Chargeable Income
      </Text>

      {/* Chargeable income */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Chargeable income
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          6.-
        </Text>
        (1) Subject to the provisions of subsection (2), the chargeable income
        of a person for a year of income from any employment, business or
        investment shall be-
      </Text>

      {/* Finance Act No.8 of 2012 s.21 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.8 of 2012 s.21
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (a) in the case of a resident person, the person's income from
        employment, business or investment for the year of income irrespective
        of the source of the income{" "}
        <Text as="span" textDecoration="line-through">
          and;
        </Text>
      </Text>

      {/* Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
        Finance Act No.8 of 2020 s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (b) in the case of a non-resident person, the person's income from the
        employment, business or investment for the year of income, but only to
        the extent that the income has a source in the United Republic{" "}
        <Text as="span" textDecoration="line-through">
          , and;
        </Text>
      </Text>

      {/* Finance Act No.8 of 2012 s.21, Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.8 of 2012 s.21
        <br />
        <Text as="span" color="brown.800">
          Finance Act No.8 of 2020 s.27
        </Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (c) In the case of a resident corporation which has perpetual unrelieved
        losses referred to in subsection 1(a) of section 4, the turnover of such
        corporation for a year of income-.{" "}
        <Text as="span" color="brown.800">
          ; and
        </Text>
      </Text>

      {/* Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
        Finance Act No.8 of 2020 s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="brown.800">
        (d) in the case of a representative assessee, the income of a
        nonresident or beneficial owner from business or investment for the year
        of income deemed to accrue or arise in the United Republic.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) The chargeable income of a resident individual who at the end of a
        year of income has been resident in the United Republic for two years or
        less in total during the whole of the individual’s life shall be
        determined under subsection (1)(b).
      </Text>

      {/* Income from an employment Act No.6 of 2006 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Income from an employmen t Act No.6 of 2006
        <br />
        S.13 Act No.7 of 1994 s.8
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        7.-(1) An individual's income from an employment for a year of income
        shall be the individual's gains or profits from the employment of the
        individual for the year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) Subject to the provisions of subsection (3), (4) and (5) in
        calculating an individual's gains or profits from an employment for a
        year of income the following payments made to or on behalf of the
        individual by the employer or an associate of the employer during that
        year of income shall be included:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) payments of wages, salary, payment in lieu of leave, fees,
        commissions, bonuses, gratuity or any subsistence travelling
        entertainment or other allowance received in respect of employment or
        service rendered;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) payments providing any discharge or reimbursement of expenditure
        incurred by the individual or an associate of the individual;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) payments for the individual's agreement to any conditions of the
        employment;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (d) retirement contributions and retirement payments;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (e) payment for redundancy or loss or termination of employment;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (f) other payment made in respect of employment including benefits in
        kind quantified in accordance with section 27;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (g) other amounts as may be required to be included under Division II of
        this Part.
      </Text>

      {/* Finance Act No. 2 of 2014 s.33 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 2 of 2014 s.33
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (h) annual director’s fees payable to a director other than a full time
        service director.
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 5 of 2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (3) In calculating an individual's gains or profits from an employment,
        the following shall be excluded -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) exempt amounts and final withholding payments;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) on premises cafeteria services that are available on a
        nondiscriminatory basis;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) medical services, payment for medical services, and payments for
        insurance for medical services to the extent that the services or
        payments are -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (i) available with respect to medical treatment of the individual,
        spouse of the individual and up to four of their children; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (ii) made available by the employer (and any associate of the employer
        conducting a similar or related business) on a non-discriminatory basis;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (d) any subsistence, travelling, entertainment or other allowance that
        represents solely the reimbursement to the recipient of any amount
        expended by him wholly and exclusively in the production of his income
        from his employment or services rendered;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (e) benefits derived from the use of motor vehicle where the employer
        does not claim any deduction or relief in relation to the ownership,
        maintenance or operation of the vehicle;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (f) benefit derived from the use of residential premises by an employee
        of the Government or any institution whose budget is fully or
        substantially out of Government budget subvention;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (g) payment providing passage of the individual, spouse of the
        individual and up to four of their children to or from a place of
        employment which correspond to the actual travelling cost where the
        individual is domiciled more than 20 miles from the place of employment
        and is recruited or engaged for employment solely in the service of the
        employer at the place of employment;
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 5 of 2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (h) retirement contributions and retirement payments exempted under the
        Public Service Retirement Benefits Act;
        <Text as="span" textDecoration="line-through">
          and
        </Text>
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 5 of 2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (i) payment that it is unreasonable or administratively impracticable
        for the employer to account for or to allocate to their recipients-.
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 5 of 2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (j) allowance payable to an employee who offers intramural private
        services to patients in a public hospital; and
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 5 of 2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (k) housing allowance, transport allowance, responsibility allowance,
        extra duty allowance, overtime allowance, hardship allowance and
        honoraria payable to an employee of the Government or an institution{" "}
        <Text as="span" bgColor="yellow.300">
          the budget of which is fully or substantially paid out of Government
          budget subvention.
        </Text>
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (4) In calculating an individual’s gains or profit from payment for
        redundancy or loss or termination of employment, any payment received in
        respect of a year of income which expired earlier than five years prior
        to the year of income in which it was received, or which the employment
        or services ceased, if earlier such payment shall, for the purposes of
        calculation of the tax payable thereon, be allocated equally between the
        years of income in which it is received or, if the employment or
        services ceased in an earlier year between such earlier year of income
        and the five years immediately proceeding such year of income in which
        such payment is so received or as the case may be, such earlier year of
        income in which the employment or services ceased, and each such
        portion, allocated to any such year of income shall be deemed to be
        income of that year of income in addition to any other income in that
        year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (5) Where amount received as compensation for the termination of any
        contract of employment or services, whether or not provision is made in
        such contract for the payment of such compensation -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) if the contract is for a specified term, the amount included in
        gains or profits shall not exceed the amount which would have been
        received in respect of the unexpired period of such contract and shall
        be deemed to have accrued evenly in such unexpired period;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) if the contract is for an unspecified term and does not provide for
        compensation on the termination thereof, any compensation paid on the
        termination thereof shall be deemed to have accrued in the period
        immediately following such termination at a rate equal to the rate per
        annum of the gains or profits from such contract received immediately
        prior to such termination, but the amount so included in gains or
        profits shall not exceed the amount of three years’ remuneration at such
        rate.
      </Text>

      {/* Income from a business */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Income from a business
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          8.-
        </Text>
        (1) A person's income from a business for a year of income is the
        person's gains or profits from conducting the business for the year of
        income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) Subject to the provisions of subsection (3), there shall be included
        in calculating a person's gains or profits from conducting a business
        for a year of income the following amounts derived by the person from
        conducting the business during the year of income -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) service fees;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) incomings for trading stock;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) gains from the realisation of business assets or liabilities of the
        business as calculated under Division III of this Part;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (d) amounts required to be included under paragraph 4 of the Third
        Schedule on the realisation of the person's depreciable assets of the
        business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (e) amounts derived as consideration for accepting a restriction on the
        capacity to conduct the business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (f) gifts and other{" "}
        <Text as="span" fontStyle="italic">
          ex gratia
        </Text>{" "}
        payments received by the person in respect of the business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (g) amounts derived that are effectively connected with the business and
        that would otherwise be included in calculating the person's income from
        an investment; and
      </Text>

      {/* S. 33 of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        S. 33 of Written Laws (Miscellaneous Amendments)
        <br />
        Act No. 7 of 2017
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (h) other amounts required to be included under Division II of this
        Part, Parts IV, V or VI.
      </Text>

      {/* S. 33 of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        S. 33 of Written Laws (Miscellaneous Amendments)
        <br />
        Act No. 7 of 2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
        (h) the amount of tax benefit or advantage quantified under Section 27
        or other amounts required to be included under Division II of this Part,
        Parts IV, V or VI.
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (3) The following are excluded in calculating a person's gains or
        profits from conducting a business-
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) exempt amounts and final withholding payments; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) amounts that are included in calculating the person's income from
        any employment.
      </Text>

      {/* Income from an investment Act No.15 of 2004 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Income from an investment
        <br />
        Act No.15 of 2004 s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          9.-
        </Text>
        (1) A person's income from an investment for a year of income is the
        person's gains or profits from conducting the investment for the year of
        income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) Subject to the provisions of subsection (3), in calculating a
        person's gains or profits from conducting an investment for a year of
        income the following amounts derived by the person from conducting the
        investment during that year of income shall be included, namely -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) any dividend, distribution of a trust, gains of an insured from life
        insurance, gains from an interest in an unapproved retirement fund,
        interest, natural resource payment, rent or royalty;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) net gains from the realisation of investment assets of the
        investment as calculated under Division III of this Part;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) amounts derived as consideration for accepting a restriction on the
        capacity to conduct the investment; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (d) other amounts required to be included under Division II of this
        Part, Parts IV, V or VI.
      </Text>

      {/* S. 32B of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        S. 32B of Written Laws (Miscellaneous Amendments)
        <br />
        Act No. 7 of 2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
        (d) the amount of tax benefit or advantage quantified under section 27
        of the Act or other amounts required to be included under Division II of
        this Part, Parts IV, V or VI.
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (3) In calculating a person's gains and profits from conducting an
        investment, the amounts shall be excluded, namely -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) exempt amounts and final withholding payments; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) amounts that are included in calculating the person's income from
        any employment or business.
      </Text>

      {/* Subdivision C: Exemption from Tax */}
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision C: Exemption from Tax
      </Text>

      {/* Minister may exempt income from tax */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Minister may exempt income from tax
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          10.-
        </Text>
        (1) The Minister may, by order in the Gazette, provide –
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) that any income or class of incomes accrued in or derived from the
        United Republic shall be exempt from tax to the extent specified in such
        order; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) that any exemption under the Second Schedule shall cease to have
        effect either generally or to such extent as may be specified in such
        Order.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) The Minister may, by Order in the Gazette, amend, vary or replace
        the Second Schedule.
      </Text>

      {/* Section 26 of the Written Laws (Miscellenous Amendments) ACt No 2 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
        Section 26 of the Written Laws (Miscellenous Amendments)
        <br />
        ACt No 2 of 2017
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="blue.500"
        textDecoration="line-through"
      >
        (3) Notwithstanding any law to the contrary, no exemption shall be
        provided from tax imposed by this Act and no agreement shall be
        concluded that affects or purports to affect the application of this
        Act, except as provided for by this Act or by way of amendment to this
        Act.
      </Text>

      {/* Section 26 of the Written Laws (Miscellenous Amendments) ACt No 2 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
        Section 26 of the Written Laws (Miscellenous Amendments)
        <br />
        ACt No 2 of 2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500">
        (3) Notwithstanding any law to the contrary, no exemption shall be
        provided from tax imposed by this Act and no agreement shall be
        concluded that affects or purports to affect the application of this
        Act, except as provided for:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
        (a) by the provisions of this Act;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
        (b) by an agreement:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
        (i) on a strategic project;{" "}
        <Text as="span" textDecoration="line-through">
          and
        </Text>
      </Text>

      {/* Finance Act 2022 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500">
        Finance Act 2022
        <Text color="brown.800">Written Laws Financial Provisions 2022</Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500">
        (ii) on public interest; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
        (iii) for a{" "}
        <Text as="span" color="brown.800">
          strategic investment
        </Text>{" "}
        special strategic investment approved by the National Investment
        Steering Committee under the Tanzania Investment Act,
        <Text as="span" color="blue.500">
          as may be approved by the Cabinet
        </Text>
      </Text>

      {/* Finance No 8 of 2020 s.28, Written Laws Financial Act 2021 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500">
        <Text color="brown.800" textDecoration="line-through">
          Finance No 8 of 2020 s.28
        </Text>
        Written Laws Finance Act 2021
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
        textDecoration="line-through"
      >
        “(4) The requirement under subsection (3)(b) shall not apply to a
        strategic project with a total tax payable not exceeding one billion
        shillings for the entire project period.”
      </Text>

      {/* Written Laws Financial Provisions 2022 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
        Written Laws Financial Provisions 2022
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="brown.800">
        (4) The exemption granted under this section shall cease to have effect
        and the income tax shall become due and payable as if the exemption has
        not been granted if such exemption has been enjoyed in any way by
        another person not entitled to enjoy similar privileges as are conferred
        under this Act.
      </Text>

      {/* Finance Act 2021 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500">
        Finance Act 2021
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="green.500">
        “(4) The requirement under subsection (3)(b) shall not apply to-
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
        (a) a strategic project with a total tax payable not exceeding one
        billion shillings for the entire project period; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
        (b) grant agreement, non-concessional or concessional loan agreement
        between the Government of the United Republic and a donor or lender
        where such agreement provides for income tax exemption
      </Text>

      {/* Limitation for exemption section 14 of Finance Act, 2015 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        Limitation for exemption <br />
        section 14 of Finance Act, 2015
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="red.500"
        textDecoration="line-through"
      >
        10A- In exercising powers under this Act, the Minister shall not grant
        tax exemption or remission on income or payment derived from Government
        project financed by a non concessional loan.
      </Text>

      {/* Finance Act No 4 of 2018 s. 24  */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
        Finance Act No 4 of 2018 s. 24
      </Text>

      {/* Subdivision D: Deductions */}
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision D: Deductions
      </Text>

      {/* General principles of deductions */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        General principles of deductions
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          11.-
        </Text>
        (1) For the purposes of calculating a person's income no deduction shall
        be allowed -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) for consumption expenditure incurred by the person or excluded
        expenditure incurred by the person; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) otherwise, except as provided for by this Act.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) Subject to this Act, for the purposes of calculating a person's
        income for a year of income from any business or investment, there shall
        be deducted all expenditure incurred during the year of income, by the
        person wholly and exclusively in the production of income from the
        business or investment.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (3) No deduction is allowed under subsection (2) for expenditure of a
        capital nature.
      </Text>

      {/* Finance Act No. 6 of 2024 */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
        Finance Act No. 6 of 2024
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500">
        (4) Without prejudice to subsection (2), expenditure incurred by a
        person during the year of income on goods or services relating to the
        production of income shall be supported by fiscal receipt except where
        the person providing the goods or services-
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
        (a) is a non-resident person with no permanent establishment in the
        United Republic; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
        (b) has been excluded from a requirement to issue fiscal receipt in
        accordance with section 36(2) of the Tax Administration Act; and
      </Text>

      {/* Finance Act No. 15 of 2010 s.13 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.15 of 2010 s.13
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (4) In the case of mining operation, where separate and distinct mining
        operations are carried on by the same person in different mining licence
        areas, the mines shall be treated as separate mining operations.”;
      </Text>

      {/* Finance Act No. 4 of 2013 s.19,  */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act. No. 4 of 2013 s.19
        <Text textDecoration="line-through">
          Finance Act. No. 4 of 2013 s.19
        </Text>
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (4) In the case of mining or petroleum operations, where separate and
        distinct mining or petroleum operations are carried on by the same
        person in a different mining area or petroleum contract area,
        determination of allowable deduction for each mining area or petroleum
        contract area shall be treated separately-.
      </Text>

      {/* FINANCE ACT NO 2 OF 2016 S.18 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        FINANCE ACT NO 2 OF 2016 S. 18
        <Text fontSize="md" color="gray.800">
          Finance Act No.15 of 2010 s.13
        </Text>
        <Text fontSize="md" color="blue.500">
          Finance Act No. 6 of 2024
        </Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (
        <Text as="span" fontSize="md" textDecoration="line-through">
          5
        </Text>
        <Text
          as="span"
          fontSize="md"
          color="red.500"
          textDecoration="line-through"
        >
          4
        </Text>
        <Text as="span" fontSize="md" color="blue.500">
          5
        </Text>
        ) For the purposes of this section -
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        “consumption expenditure” means any expenditure incurred by any person
        in the maintenance of himself, his family or establishment, or for any
        other personal or domestic purpose;
      </Text>

      {/* FINANCE ACT NO 2 OF 2016 S.18 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        FINANCE ACT NO 2 OF 2016 S. 18
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        "expenditure of a capital nature" means expenditure -
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (a) that secures a benefit lasting longer than twelve months; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (b) incurred in respect of natural resource prospecting, exploration and
        development; and
      </Text>

      {/* FINANCE ACT NO 2 OF 2016 S.18 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        FINANCE ACT NO 2 OF 2016 S. 18
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
        "expenditure of a capital nature" means expenditure -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        “excluded expenditure” means -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) tax payable under this Act;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) bribes and expenditure incurred in corrupt practice;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) fines and similar penalties payable to a government or a political
        subdivision of a government of any country for breach of any law or
        subsidiary legislation;
      </Text>

      {/* FINANCE ACT NO. 15 OF 2010 S.13 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.15 of 2010 s.13
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (d) expenditure to the extent to which incurred by a person in deriving
        exempt amounts or final withholding payments;
        <Text as="span" textDecoration="line-through">
          or
        </Text>
      </Text>

      {/* FINANCE ACT NO. 15 OF 2010 S.13 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.15 of 2010 s.13
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (e) distributions by an entity. or
      </Text>

      {/* FINANCE ACT NO. 4 OF 2017 S.18 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        Finance Act No. 4 of 2017 s.18
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
        (f) withholding tax paid by a withholder.
      </Text>

      {/* FINANCE ACT No.15 of 2010 s.13 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        <Text fontSize="md" textDecoration="line-through">
          Finance Act No.15 of 2010 s.13
        </Text>
        Finance Act No.2 of 2016 s.18
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (g) “mining operation” shall not include exploration activities
        conducted outside the mining licence area which shall be accumulated and
        allowed when the commercial operations commence
      </Text>

      {/* Interest Act No.15 of 2010 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Interest Act No.15 of 2010 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontWeight="bold">
          12.-
        </Text>
        (1) For the purposes of section 11(2), interest incurred by a person
        during a year of income under a debt obligation shall be incurred wholly
        and exclusively in the production of income from a business or
        investment if -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) where the debt obligation was incurred in borrowing money, the money
        is employed during the year of income or was used to acquire an asset
        that is employed during the year of income wholly and exclusively in the
        production of income from the business or investment; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) in any other case, the debt obligation was incurred wholly and
        exclusively in the production of income from the business or investment
      </Text>

      {/* Finance Act no 15 of 2010 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 15 of 2010 s.14
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (2) The total amount og interest that an exempt controlled resident
        entity may deduct under section 11(2) for a year of income shall not
        exceed the sum of-
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (a)all interest derived by the entity during the year of income that is
        to be included in calculating the entity’s total income for the year of
        income; plus
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (b)70 percent of entity’s total income for the year of income calculated
        without including any interest derived or deducting any interest
        incurred by the entity.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (3)…Any interest for which a deduction is denied as a result of
        subsection 2 may be carried forward and treated as incurred during the
        next year of income.
      </Text>

      {/* Finance Act No 15 of 2010 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No.15 of 2010 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (2) The total amount of interest that an exempt-controlled resident
        entity may deduct in accordance with section 11(2) for a year of income
        shall not exceed the sum of interest equivalent to debt-to-equity ratio
        of
        <Text as="span" textDecoration="line-through">
          {" "}
          70 to 30
        </Text>{" "}
        7 to 3.
      </Text>

      {/* Finance Act No. 8 of 2012 s.22 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 8 of 2012 s.22
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (3) In this section, an entity is an exempt-controlled resident entity
        for a year of income if it is resident and at any time during the year
        of income 25 percent or more of the underlying ownership of the entity
        is held by entities exempt under the Second Schedule, approved
        retirement funds, charitable organisations, non-resident persons or
        associates of such entities or persons.
      </Text>

      {/* Finance Act No. 8 of 2012 s.22 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 8 of 2012 s.22
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (4) Where there is a change of the amount of debt or equity, the amount
        of equity or debt shall be the average of the balances of amount of debt
        or equity at the end of each period.
      </Text>

      {/* Finance Act No. 8 of 2012 s.22 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 8 of 2012 s.22
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (5) For the purpose of this section-.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        “debt” means any debt obligation excluding:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (i) a non-interest bearing debt obligation;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (ii) a debt obligation owed to a resident financial institution;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (iii) a debt obligation owed to a non-resident bank or financial
        institution on whose interest tax is withheld in the United Republic;
      </Text>

      {/* Finance Act No. 8 of 2012 s.22 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 8 of 2012 s.22
        <Text fontSize="md" color="green.500">
          Finance Act 2022
        </Text>
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        “equity” means:
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (i) paid up share capital;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (ii) paid up share premium; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (iii) retained earnings on an unconsolidated basis determined in
        accordance with generally accepted accounting principles; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
        “equity” means paid up share capital at the end of the year of income;
      </Text>

      {/* Finance Act No. 8 of 2012 s.22 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act No. 8 of 2012 s.22
        <Text fontSize="md" color="brown.800">
          Finance Act No. 8 of 2020 s.29
        </Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        “period” means a month or a part of month
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="brown.800">
        (6) Notwithstanding any other provision to the contrary, the amount of
        deductible realized foreign exchange loss on interest free debt
        obligation shall be the amount of loss attributable to not more than
        seventy percent of such obligation.
      </Text>

      {/* Trading Stock */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Trading stock
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontSize="md" fontWeight="bold">
          13.-
        </Text>
        (1) For the purposes of calculating a person's income for a year of
        income from any business, there shall be deducted in respect of the
        trading stock of the business the allowance determined under subsection
        (2).
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) The allowance shall be calculated as -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) the opening value of trading stock of the business for the year of
        income; plus
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) expenditure incurred by the person during the year of income that is
        included in the cost of trading stock of the business; less
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (c) the closing value of trading stock of the business for the year of
        income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (3) The opening value of trading stock of a business for a year of
        income shall be the closing value of trading stock of the business at
        the end of the previous year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (4) The closing value of trading stock of a business for a year of
        income shall be the lower of -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) the cost of the trading stock of the business at the end of the year
        of income; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) the market value of the trading stock of the business at the end of
        the year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (5) Where the closing value of trading stock is determined in accordance
        with subsection (4)(b), the cost of the trading stock shall be reset to
        that value.
      </Text>

      {/* Repair and maintenance expenditure */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Repair and maintenance expenditure
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontSize="md" fontWeight="bold">
          14.-
        </Text>
        (1) For the purposes of calculating a person's income for a year of
        income from any business, there shall be deducted all expenditure to the
        extent incurred during the year of income, by the person and in respect
        of the repair or maintenance of depreciable assets owned and employed by
        the person wholly and exclusively in the production of income from the
        business.
      </Text>

      {/* Finance Act No. 4 of 2017 s. 19 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        Finance Act No. 4 of 2017 s. 19
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        (2) No deductions shall be allowed under subsection (1) for expenditure
        in improving an asset, but that expenditure may be included in the cost
        of the asset if the requirements of section{" "}
        <Text
          as="span"
          fontSize="md"
          color="red.500"
          textDecoration="line-through"
        >
          {" "}
          36{" "}
        </Text>
        <Text as="span" fontSize="md" color="red.500">
          37
        </Text>
        are met.
      </Text>

      {/* Agriculture improvements */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Agriculture improvement, research development and environ- mental
        expenditure
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        <Text as="span" fontSize="md" fontWeight="bold">
          15.-
        </Text>
        (1) For the purposes of calculating a person's income for a year of
        income from any business, there shall be deducted agricultural
        improvement, research and development and environmental expenditure to
        the extent incurred by the person during the year of income in
        conducting the business.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (2) For the purposes of this section -
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
        “agricultural improvement expenditure” means expenditure incurred by the
        owner or occupier of farm land in conducting an agriculture, livestock
        farming or fish farming business where the expenditure is incurred in -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (a) clearing the land and excavating irrigation channels; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        (b) planting perennial crops or trees bearing crops;
      </Text>

      {/* Finance Act no 2 of 2016 s. 19 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 2 of 2016 s. 19
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        "environmental expenditure" means subject to subsection (3) expenditure
        incurred -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (a) by the owner or occupier of farm land for the prevention of soil
        erosion; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (b) in connection with remedying any damage caused by natural resource
        extraction operations to the surface of or environment on land; and
      </Text>

      {/* Finance Act no 2 of 2016 s. 19 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
        Finance Act no 2 of 2016 s. 19
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
        “environmental expenditure” means expenditure incurred by the owner or
        occupier of farmland for prevention of soil erosion”;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
        "research and development expenditure” means expenditure incurred by a
        person in the process of developing the person's business and improving
        business products or process and includes expenditure incurred by a
        company for the purposes of an initial public offer and first listing on
        the Dar es Salaam Stock Exchange but excludes any expenditure incurred
        that is otherwise included in the cost of anyasset used in the use in
        any such process, including an asset referred to in paragraph 1(3) of
        the Third Schedule.
      </Text>

      {/* Finance Act no 2 of 2016 s. 19 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
        Finance Act no 2 of 2016 s. 19
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (3) Where a person conducting a resource extraction business makes
        provision for any expenditure of the type referred to in paragraph (b)
        of the definition of “environmental expenditure” in subsection (2), the
        Commissioner may, in writing, subject to such terms and conditions as he
        thinks fit and for the purposes of this section only, treat the
        provision as environmental expenditure incurred in conducting the
        business.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (4) In approving a provision under subsection (3), the Commissioner
        shall specify a date by which the expenditure must be incurred by the
        person, which date shall not be more than two years after the date by
        which resource extraction has substantially ceased by the person on such
        land.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (5) Where the Commissioner approves a provision under subsection (3),
        and the person does not incur the expenditure by the time specified in
        the approval in accordance with subsection (4) -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (a) the Commissioner shall adjust any assessment of the person which has
        been calculated on the basis of a deduction under this section for the
        provision so as to remove the deduction, which adjustment shall be made
        irrespective of any time limit imposed by{" "}
        <Text
          as="span"
          fontSize="md"
          color="red.500"
          textDecoration="line-through"
        >
          section 96 section 48 of the Tax Administration Act
        </Text>
        ; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (b) the person shall be liable for -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (i) interest under{" "}
        <Text
          as="span"
          fontSize="md"
          color="red.500"
          textDecoration="line-through"
        >
          sections 99 and 100 sections 75 and 76 of the Tax Administration Act
        </Text>{" "}
        based on any such adjusted assessment; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="red.500"
        textDecoration="line-through"
      >
        (ii){" "}
        <Text
          as="span"
          fontSize="md"
          color="gray.800"
          textDecoration="line-through"
        >
          a penalty under
        </Text>{" "}
        section 101 section 79 of the Tax Administration Act.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (iii) calculated as though the person made, without reasonable excuse, a
        statement to the Commissioner in claiming the deduction that was false
        or misleading in a material particular.
      </Text>

      {/* Gifts to public, charitable */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Gifts to
public,
charitable
and
religious
institutions
<br />
Acts No.13
of 2005
s.9
6 of 2006
s.14
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">16.-</Text>(1) For the purpose of calculating a person's income for a year
        of income from any business, there shall be deducted -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) amounts contributed during the year of income to a charitable
institution referred to in subsection (8) of section 64 or social
development project;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) any donation made under section 12 of the Education Fund
        Act; <Text as="span" fontSize="md" textDecoration="line-through">and</Text>
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (c) amount paid to local government authority, which are
        statutory obligations to support community development projects;- <Text as="span" fontSize="md" color="brown.800">and</Text>
      </Text>

      {/* Cap. 412 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Cap. 412
      <Text fontSize="md" color="brown.800">Finance Act no
      8 of 2020 s. 30</Text>
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (d) contribution made to the AIDS Trust Fund established under
        the Tanzania Commission for AIDS Act; and
      </Text>

      {/* Finance Act no 8 of 2020 s. 30 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act no
8 of 2020 s. 30
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (e) contribution made to the Government in the fight against
        Coronavirus disease (COVID-19).
      </Text>

      {/* Finance Act no 8 of 2020 s. 30 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act no
8 of 2020 s. 30
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (2) The provisions of subsection (1)(e) shall cease to have effect on
such date as the Minister may, by notice published in the Gazette,
determine
      </Text>

      {/* Finance Act no 8 of 2020 s. 30 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act no
8 of 2020 s. 30
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (<Text as="span" fontSize="md" textDecoration="line-through">2</Text><Text as="span" fontSize="md" color="brown">3</Text>) The deduction available under subsection (1)(a) for a year of
income shall not exceed two percent of the person's income from the
business calculated without a deduction under that subsection.
      </Text>

      {/* Finance Act no 8 of 2020 s. 30 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act no
8 of 2020 s. 30
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (<Text as="span" fontSize="md" textDecoration="line-through">3</Text><Text as="span" fontSize="md" color="brown">4</Text>) For the purpose of calculating a person’s income for a year of
income from any employment, there shall be deducted any donation made
under section 12 of the Education Fund Act.
      </Text>

      {/* Finance Act no 8 of 2020 s. 30 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act no
8 of 2020 s. 30
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (<Text as="span" fontSize="md" textDecoration="line-through">4</Text><Text as="span" fontSize="md" color="brown">5</Text>) Subject to subsection <Text as="span" fontSize="md" textDecoration="line-through">(3)</Text> <Text as="span" fontSize="md" color="brown">(4)</Text> an employee who makes a
donation to the Fund may apply to the Commissioner for deduction.
      </Text>

      {/* Depreciation allowances for depreciable assets */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Depreciation
allowances
for depreciable assets
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">17.</Text> For the purposes of calculating a person's income for a year of
income from any business, there shall be deducted in respect of
depreciation of depreciable assets owned and employed by the person
during the year of income wholly and exclusively in the production of the
person's income from the business the allowances granted under the Third
Schedule.
      </Text>

      {/* Losses on realisation of business assets and liabilities */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Losses on
realisation
of business
assets and
liabilities
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">18.</Text>  For the purposes of calculating a person's income for a year of
income from any business, there shall be deducted any loss of the person,
as calculated under Division III of this Part, from the realisation during the
year of income of -
Schedule.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) a business asset of the business that is or was employed
wholly and exclusively in the production of income from the
business; 
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) a debt obligation incurred in borrowing money, where the
money is or was employed or an asset purchased with the
money is or was employed wholly and exclusively in the
production of income from the business; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (c) a liability of the business other than a debt obligation incurred
in borrowing money, where the liability was incurred wholly
and exclusively in the production of income from the
business.
      </Text>

      {/* Losses from a business or investment Act No.15 of 2004 s.28 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Losses
from a
business or
investment
Act No.15
of 2004
s.28
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">19.-</Text>(1) For the purposes of calculating the income of a person
(other than a partnership or a foreign permanent establishment) for a
year of income from a business or investment, there shall be deducted-
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) any unrelieved loss of the year of income of the person from
        any other business or investment; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) any unrelieved loss of a previous year of income of the person
        from any business or investment.
      </Text>

      {/* Finance Act No 8 of 2020 s.31 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No 8 of 2020
s.31
      </Text>
      <Text fontSize="md" mt="0" textAlign="left" color="blue.500">Finance Act
      No. 6 of 2024</Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (2) Income of a person for the year of income having chargeable
income and unrelieved losses for the four previous consecutive years of
income may, subject to other limitations imposed by this section, be
reduced by reason of use of the unrelieved losses which shall not be below
thirty <Text as="span" fontSize="md" color="blue.500">forty</Text> per centum of that income before any reduction for losses:
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="brown.800"
      >
        Provided that, the requirement under this subsection shall not
apply to a corporation undertaking agricultural business or providing
health or education services.”; and
      </Text>

      {/* Finance Act No 8 of 2020 s.31 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No 8 of 2020
s.31
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" textDecoration="line-through">(2)</Text><Text as="span" fontSize="md" color="brown">(3)</Text> For the purposes of subsection (1), a person may deduct an
        unrelieved loss -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) in the case of a foreign source loss from an investment, only
in calculating the person's foreign source income from an
investment;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) in the case of other losses from an investment, only in
        calculating the person's income from an investment; 
      </Text>

      {/* Finance Act No. 4 of 2013 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No. 4 of
2013 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (c) in the case of other foreign source losses, only in calculating
        the person's foreign source income; <Text as="span" fontSize="md" textDecoration="line-through">and</Text> 
      </Text>

      {/* Finance Act No. 4 of 2013 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 4 of
2013 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (d) in the case of loss incurred on petroleum operations, only in
        calculating the person’s income derived from contract area;
      </Text>

      {/* Finance Act No. 2 of 2016 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 2 of
2016 s.20
      </Text>
      <Text fontSize="md" mt="0" textAlign="left" color="gray.800" textDecoration="line-through">
      Finance Act
No. 4 of
2013 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (e) in the case of loss incurred on mining operations, only in
calculating the person’s income derived from mining area;
and;
      </Text>

      {/* Finance Act No. 2 of 2016 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 2 of
2016 s.20
      </Text>
      <Text fontSize="md" mt="0" textAlign="left" color="brown.800">
      Finance Act
No 4 of 2017
s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (e) in the case of loss incurred in dealing with a speculative
transaction, only in calculating the person’s income derived
from a speculative transaction.
      </Text>

      {/* Finance Act No. 4 of 2013 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 4 of
2013 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (f) in the case of loss incurred on agricultural business, only in
calculating the person’s income derived from agricultural
business.
      </Text>

      {/* Finance Act No 8 of 2020 s.31 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No 8 of 2020 s.31
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" textDecoration="line-through">(3)</Text> <Text as="span" fontSize="md" color="brown.800">(4)</Text> Where a person calculates income for a year of income 
        from more than one business or investment of the person, and deducts
an unrelieved loss in more than one such calculation, the person may
choose the calculation or calculations in which the loss or part of the
loss is deducted.
      </Text>

      {/* Finance Act No 8 of 2020 s.31 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No 8 of 2020
s.31
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" textDecoration="line-through">(4)</Text> <Text as="span" fontSize="md" color="brown.800">(5)</Text> For the purposes of this section -
loss is deducted.
      </Text>

      {/* Finance Act No. 2 of 2016 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No. 2 of
2016 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        “agricultural business” means the practice of rearing of crops or animals
including forestry, beekeeping, acqua-culture and faming with a
view to deriving a profit but excludes <Text as="span" fontSize="md" textDecoration="line-through">extraction of natural resources</Text>
<Text as="span" fontSize="md" textDecoration="line-through">or</Text> processing of agricultural produce other than preparing such
produce for the purpose of sale in its original form;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        "loss" of a year of income of a person from any business or investment
shall be calculated as the excess of amounts deducted in calculating
the person's income from the business or investment over amounts
included in calculating such income;
      </Text>

      {/* Finance Act No. 4 of 2017 s.20 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
      Finance Act
No. 4 of
2017 s.20
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="red.500"
      >
        “speculative transaction” means-
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="red.500"
      >
        (a) a transaction which is a contract for sale or purchase of a commodity
including stocks and shares settled otherwise than actual delivery or
transfer of the commodity; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="red.500"
      >
        (b) any agreement for repurchase or resale, forward sale or purchase,
        futures contract, option or swap contract;.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        "unrelieved loss" means the amount of a loss that has not been deducted in
        calculating a person's income under subsection (1) or section 26(3).
      </Text>

      {/* Division II: Rules Governing Amounts Used in Calculating the Income Tax Base */}
      <Text
        fontSize="md"
        mt="4"
        textAlign="center"
        color="gray.800"
        textTransform="capitalize"
      >
        Division II: Rules Governing Amounts Used in Calculating the Income Tax Base
      </Text>

      {/* Subdivision A: Tax Accounting and Timing */}
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision A: Tax Accounting and Timing
      </Text>

      {/* Year of income */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Year of
income
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">20.-</Text>(1) Subject to the provisions of this section, the year of income
        for every person shall be the calendar year.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (2) Subject to the provisions of subsections (6), (7) and (8), an
entity may apply, in writing, to the Commissioner for approval to
change the entity's year of income from -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) the calendar year; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) a twelve-month period previously approved by the
Commissioner under subsection (3),
to another twelve-month period.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (3) Where, in an application under subsection (2), the entity
shows a compelling need to change the entity's year of income, the
Commissioner may, by notice in writing, approve the application
subject to any conditions as the Commissioner prescribes.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (4) The Commissioner may, by notice in writing, revoke an approval granted to an entity under subsection (3).
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(5) Where an entity's year of income changes, the period between
the end of its previous year of income and the beginning of its new year of
income shall be another year of income of length of up to twelve months,
or to 18 months subject to approval of the Commissioner.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(6) The year of income for every person's foreign permanent
establishment shall be the same as the year of income of its owner.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(7) The year of income for every non-resident partnership, trust or
corporation shall be the period, not exceeding twelve months, for which
the entity makes up its accounts or, if it has no such period, the calendar
year.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(8) The initial year of income of a person shall be the period of
twelve months or less or subject to the approval of commissioner eighteen
months or less from the time the person starts to exist until the end of the
person's year of income as calculated according to the foregoing
subsections.
      </Text>

      {/* Basis of accounting for income tax purposes */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Basis of accounting for income tax purposes
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">21.-</Text>(1) Subject to this Act, a person shall account for his income
        according to generally accepted accounting principles.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (2) Notwithstanding the provisions of subsection (1), an individual
shall account for income tax purposes on a cash basis in calculating the
individual's income from an employment or investment.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
        bgColor="yellow.300"
      >
        (3) A corporation shall account for income tax purposes on an
        accrual basis.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (4) Unless the Commissioner prescribes otherwise by notice in
writing, individuals in calculating income from a business, partnerships
and trusts shall account for income tax purposes on either a cash or
accrual basis according to the method that most clearly reflects the
person's gains or profits.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (5) Subject to the provisions of subsections (2) and (3), a person
may apply in writing for a change in the person's basis of accounting for
income tax purposes and the Commissioner may by notice in writing
approve the application but only if satisfied that the change is necessary to
clearly reflect the person's gains and profits.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
      (6) Where any aspect of a person's basis of accounting for income
tax purposes is changed, adjustments shall be made in the year of income
of the change so that no item is omitted or taken into account more than
once.
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="red.500"
      >
      (7) In this section, “generally accepted accounting
principles” means the principles adopted by the National Board of
Accountants and Auditors
      </Text>

      {/* Cash basis accounting */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Cash basis
      accounting
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">22.</Text> Subject to this Act, a person who accounts for income tax
        purposes on a cash basis -.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) derives an amount and, therefore, shall include the amount in
calculating the person’s income or otherwise account for the
amount as required by this Act when payment is received or
made available to the person; and 
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) incurs expenditure and, therefore, may deduct the expenditure
in calculating the person’s income or otherwise account for
the expenditure as required by this Act when payment is
made.
      </Text>

      {/* Accrual Basis Accounting */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Accrual Basis Accounting
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">23.-</Text> (1) Subject to this Act, a person who accounts for income tax
        purposes on an accrual basis-
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) derives an amount when it is receivable by the person; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(b) incurs expenditure when it is payable by the person.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(2) Subject to this Act, an amount is receivable by a person when
the person becomes entitled to receive it, even if the time for discharge of
the entitlement is postponed or the entitlement is payable by instalments.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(3) Subject to this Act, an amount shall be treated as payable by a
person when all the events that determine liability have occurred and the
amount of the liability can be determined with reasonable accuracy, but
not before economic performance with respect to the amount occurs.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(4) For the purposes of subsection (3), economic performance
occurs -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(a) with respect to the acquisition of services or property, at the
time the services or property are provided;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(b) with respect to the use of an asset, at the time the asset is
used; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(c) in any other case, at the time the person makes payment in
full satisfaction of the liability.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(5) Where in calculating income on an accrual basis -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(a) a person includes a payment of a particular quantity to which
the person is entitled or deducts a payment of a particular
quantity that the person is obliged to make; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(b) subsequently that entitlement or obligation is satisfied by a
payment received or made by the person, as the case requires,
of a different quantity, including by reason of a change in
currency valuations,
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
then appropriate adjustments shall be made at the time the payment is
received or made so as to remedy the inaccuracy.
      </Text>

      {/* Claim of right */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Claim of right
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">24.</Text> For the purposes of sections 22 and 23, an amount shall be
treated as derived or expenditure incurred by a person notwithstanding
that the person is not legally entitled to receive the amount or liable to
make the payment, if the person claims to be legally entitled to receive, or
legally obliged to pay the amount.
      </Text>

      {/* Reverse of amounts including bad debts */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Reverse of
amounts
including
bad debts
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">25.-</Text>(1) Where a person has deducted expenditure in calculating
the person's income and the person later recovers the expenditure, the
person shall, at the time of recovery, include the amount recovered in
calculating the person's income.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (2) Where a person has included an amount in calculating the
person's income and, because of a legal obligation to do so, the person
later refunds the amount, the person may, at the time of refund, deduct the
amount refunded in calculating the person's income.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (3) Where in calculating income on an accrual basis a person
deducts expenditure that the person shall be obliged to make and the
person later disclaims an obligation to incur the expenditure, the person
shall, at the time of disclaimer, include the amount disclaimed in
calculating the person's income.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (4) Subject to the provisions of subsection (5), where in calculating
income on an accrual basis a person includes an amount to which the
person is entitled and the person later -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) disclaims an entitlement to receive the amount; or
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) in the case where the amount constitutes a debt claim of the
person, the person writes off the debt as bad,
the person may, at the time of disclaimer or writing off, deduct the amount
disclaimed or written off in calculating the person's income.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (5) A person may disclaim the entitlement to receive an amount or
        write off as bad a debt claim of the person -
      </Text>

      {/* Finance Act No. 2 of 2014 s.34 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 2 of
2014 s.34
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        textDecoration="line-through"
      >
        (a) in the case of a debt claim of a financial institution, only after
the debt claim has become a bad debt as determined in
accordance with the relevant standards established by the Bank
of Tanzania; and
      </Text>

      {/* Finance Act No. 2 of 2014 s.34 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No. 2 of
2014 s.34
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        (a) in the case of debt claim of a financial institution, after the debt
claim has become bad debt as determined in accordance with
the relevant standards established by the bank of Tanzania and
such institution has taken all reasonable steps in pursuing
payment and the institution reasonably believes that debt claim
will not be satisfied; and;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (b) in any other case, only after the person has taken all reasonable
steps in pursuing payment and the person reasonably believes
that the entitlement or debt claim will not be satisfied.
      </Text>

      {/* Long-term contracts */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Long-term
contracts
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">26.-</Text>(1) In the case of a person accounting for income tax purposes
on an accrual basis, amounts to be included or deducted in calculating
income that relate to a long-term contract shall be taken into account on
the basis of the percentage of the contract completed during each year of
income.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (2) The percentage of completion shall be determined by comparing
the total expenditure allocated to the contract and incurred before the end
of the year of income with the estimated total contract expenditure as
determined at the time of commencement of the contract.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (3) Where for the year of income in which a long-term contract is
completed, the person has an unrelieved loss (determined under section
19) for the year of income or a previous year of income that is attributable
to the long-term contract, the Commissioner may allow the loss to be -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (a) carried back to a previous year of income; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(b) treated as an unrelieved loss for that year.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(4) The amount treated as an unrelieved loss for a year of income
under subsection (3)(b) shall not exceed the amount by which amounts
included in calculating income for that year of income under the contract
exceed deductions under the contract for the year.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(5) An unrelieved loss for a year of income shall be attributable to
a long-term contract to the extent that deductions in calculating the income
from the business that relate to the contract exceed inclusions in that
calculation that relate to the contract.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(6) For the purposes of this section, "long-term contract” -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(a) means a contract for manufacture, installation, or construction,
or, in relation to each, the performance of related services,
which is not completed within the year of income in which work under the contract commences; but
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(b) excludes a contract estimated to be completed within six
months of the date on which work under the contract
commenced.
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
(7) The regulations may apply the percentage of completion method
to other types of contracts that span more than one year of income where
the contract may accelerate expenditure in early years or delay income
until later years of the contract.
      </Text>

      {/* Subdivision B: Quantification, Allocation and Characterisation of Amounts */}
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
        fontStyle="italic"
      >
        Subdivision B: Quantification, Allocation and Characterisation of Amounts
      </Text>

      {/* Quantification according to market value */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Quantification
according to
market
value
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" fontWeight="bold">27.-</Text>(1) A payment or amount to be included or deducted in
        calculating income shall be quantified as follows -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" color="brown.800">(a)</Text> for payments consisting of the availability for use or use of
a motor vehicle during a year of income provided in return
for services whether by way of employment or otherwise
or provided by an entity to a member or manager of the
entity, the amount of the payment shall be as prescribed in
the Fifth Schedule;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" color="brown.800">(b)</Text> for payments consisting of a loan provided in return for
services (whether by way of employment or otherwise) or
by an entity to a member or manager of the entity-
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (i) where the loan is made by an employer to an
employee, the term of the loan is less than twelve
months and the aggregate amount of the loan and any
similar loans outstanding at any time during the
previous twelve months does not exceed three months
basic salary, the quantity of the payment is nil; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (ii) in any other case, the amount by which -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (aa) the interest that would have been paid by the
payee during the year of income of the payee
in which the payment is made if interest were
payable under the loan at the statutory rate for
the year of income, exceeds;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
        (bb) the interest paid by the payee during the year
        of income under the loan, if any;
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
       <Text as="span" fontSize="md" color="brown.800">(c)</Text> for payments consisting of the provision of premises
       (including any furniture or other contents) by an employer for residential occupation by an employee during a year of
income, (i) or (ii), whichever is less, reduced by any rent
paid for the occupation by the employee, where -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
       (i) is the market value rental of the part of the premises
occupied by the employee for the period occupied
during the year of income; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
       (ii) is the greater of -
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
       (aa) 15 percent of the employee's total income for the
year of income, calculated without accounting for
the provision of the premises and, where the
premises are occupied for only part of the year of
income, apportioned as appropriate; and
      </Text>
      <Text
        fontSize="md"
        mt="2"
        textAlign="center"
        color="gray.800"
      >
       (bb) expenditure claimed as a deduction by the
employer in respect of the premises for the period
of occupation by the employee during the year of
income; and
      </Text>

      {/* S. 32C of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      S. 32C of
Written Laws
(Miscellaneous
Amendments)
Act No. 7 of
2017
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        (d) for the purpose of tax benefit or advantage, the amount of
tax benefit or advantage shall be 330 percent of the actual
tax benefit or advantage:
      </Text>

      {/* S. 32C of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      S. 32C of
Written Laws
(Miscellaneous
Amendments)
Act No. 7 of
2017
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="brown.800"
      >
        Provided that, for the purpose of this paragraph, tax
benefits or advantage means benefit or advantage obtained by
a person by shifting an obligation to pay income tax to
another person;
      </Text>

      {/* S. 32C of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      S. 32C of
Written Laws
(Miscellaneous
Amendments)
Act No. 7 of
2017
      </Text>
      <Text
        fontSize="md"
        mt="6"
        textAlign="center"
        color="gray.800"
      >
        <Text as="span" fontSize="md" color="brown.800">(e)</Text> in any other case, the amount prescribed by the
regulations or, in the absence of regulations, the market
value.
another person;
      </Text>
      

    </Box>
  );
};

export default IncomeTaxBase;
