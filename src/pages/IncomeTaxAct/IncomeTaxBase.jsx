import React, { useEffect } from 'react';
import { 
  Box,
  Text,
} from "@chakra-ui/react";

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
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
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
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: Calculating the Income Tax Base
      </Text>

      {/* Subdivision A: Total Income */}
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision A: Total Income
      </Text>
      
      {/* Total income */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Total
      income
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      <Text as="span" fontWeight="bold">5.-</Text>(1) The total income of a person shall be the sum of the person's
chargeable income for the year of income from each employment,
business and investment less any reduction allowed for the year of income
under section 61 relating to retirement contributions to approved
retirement funds.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) The total income of each person shall be determined separately.
      </Text>

      {/* Subdivision B: Chargeable Income */}
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision B: Chargeable Income
      </Text>
      
      {/* Chargeable income */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Chargeable
income
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      <Text as="span" fontWeight="bold">6.-</Text>(1) Subject to the provisions of subsection (2), the chargeable
income of a person for a year of income from any employment, business
or investment shall be-
      </Text>

      {/* Finance Act No.8 of 2012 s.21 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No.8 of
2012 s.21
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (a) in the case of a resident person, the person's income from
employment, business or investment for the year of income
irrespective of the source of the income <Text as="span" textDecoration="line-through">and;</Text> 
      </Text>

      {/* Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No.8 of
2020 s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (b) in the case of a non-resident person, the person's income from
the employment, business or investment for the year of
income, but only to the extent that the income has a source in
the United Republic <Text as="span" textDecoration="line-through">, and;</Text> 
      </Text>

      {/* Finance Act No.8 of 2012 s.21, Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Finance Act
No.8 of
2012 s.21<br />
<Text as="span" color="brown.800">Finance Act
No.8 of
2020 s.27</Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (c) In the case of a resident corporation which has perpetual
unrelieved losses referred to in subsection 1(a) of section 4, the
turnover of such corporation for a year of income-. <Text as="span" color="brown.800">; and</Text> 
      </Text>

      {/* Finance Act No.8 of 2020 s.27 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800">
      Finance Act
No.8 of
2020 s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="brown.800">
      (d) in the case of a representative assessee, the income of a nonresident or beneficial owner from business or investment for
the year of income deemed to accrue or arise in the United
Republic.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) The chargeable income of a resident individual who at the end
of a year of income has been resident in the United Republic for two years
or less in total during the whole of the individual’s life shall be determined
under subsection (1)(b).
      </Text>

      {/* Income from an employment Act No.6 of 2006 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Income
from an
employmen
t
Act No.6
of 2006<br />
S.13
Act No.7
of 1994
s.8
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      7.-(1) An individual's income from an employment for a year of
income shall be the individual's gains or profits from the employment of
the individual for the year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) Subject to the provisions of subsection (3), (4) and (5) in
calculating an individual's gains or profits from an employment for a year
of income the following payments made to or on behalf of the individual
by the employer or an associate of the employer during that year of
income shall be included:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) payments of wages, salary, payment in lieu of leave, fees,
commissions, bonuses, gratuity or any subsistence travelling
entertainment or other allowance received in respect of
employment or service rendered;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) payments providing any discharge or reimbursement of
expenditure incurred by the individual or an associate of the
individual;
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
      (f) other payment made in respect of employment including
      benefits in kind quantified in accordance with section 27;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (g) other amounts as may be required to be included under Division
      II of this Part.
      </Text>

       {/* Finance Act No. 2 of 2014 s.33 */}
       <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
       Finance Act
No. 2 of
2014 s.33
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (h) annual director’s fees payable to a director other than a full time
service director.
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
Finance Act
no 5 of
2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (3) In calculating an individual's gains or profits from an
employment, the following shall be excluded -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) exempt amounts and final withholding payments;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) on premises cafeteria services that are available on a nondiscriminatory basis; 
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (c) medical services, payment for medical services, and payments
for insurance for medical services to the extent that the
services or payments are -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (i) available with respect to medical treatment of the
individual, spouse of the individual and up to four of
their children; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (ii) made available by the employer (and any associate of
the employer conducting a similar or related business)
on a non-discriminatory basis;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (d) any subsistence, travelling, entertainment or other allowance
that represents solely the reimbursement to the recipient of any
amount expended by him wholly and exclusively in the
production of his income from his employment or services rendered;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (e) benefits derived from the use of motor vehicle where the
employer does not claim any deduction or relief in relation to
the ownership, maintenance or operation of the vehicle;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (f) benefit derived from the use of residential premises by an
employee of the Government or any institution whose budget
is fully or substantially out of Government budget subvention;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (g) payment providing passage of the individual, spouse of the
individual and up to four of their children to or from a place of
employment which correspond to the actual travelling cost
where the individual is domiciled more than 20 miles from the
place of employment and is recruited or engaged for
employment solely in the service of the employer at the place
of employment;
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
Finance Act
no 5 of
2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (h) retirement contributions and retirement payments exempted
under the Public Service Retirement Benefits Act;<Text as="span" textDecoration="line-through">and</Text>
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
Finance Act
no 5 of
2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (i) payment that it is unreasonable or administratively
impracticable for the employer to account for or to allocate to
their recipients-.
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
Finance Act
no 5 of
2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (j) allowance payable to an employee who offers intramural
private services to patients in a public hospital; and
      </Text>

      {/* Finance Act no 5 of 2011 s.14 */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
Finance Act
no 5 of
2011 s.14
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (k) housing allowance, transport allowance, responsibility
allowance, extra duty allowance, overtime allowance,
hardship allowance and honoraria payable to an employee of
the Government or an institution <Text as="span" bgColor="yellow.300">the budget of which is fully
or substantially paid out of Government budget subvention.</Text>
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (4) In calculating an individual’s gains or profit from payment for
redundancy or loss or termination of employment, any payment received
in respect of a year of income which expired earlier than five years prior to
the year of income in which it was received, or which the employment or
services ceased, if earlier such payment shall, for the purposes of
calculation of the tax payable thereon, be allocated equally between the
years of income in which it is received or, if the employment or services
ceased in an earlier year between such earlier year of income and the five
years immediately proceeding such year of income in which such payment
is so received or as the case may be, such earlier year of income in which
the employment or services ceased, and each such portion, allocated to
any such year of income shall be deemed to be income of that year of
income in addition to any other income in that year of income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (5) Where amount received as compensation for the termination of
any contract of employment or services, whether or not provision is made in such contract for the payment of such compensation -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) if the contract is for a specified term, the amount included in
gains or profits shall not exceed the amount which would have
been received in respect of the unexpired period of such
contract and shall be deemed to have accrued evenly in such
unexpired period;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (c) if the contract is for an unspecified term and does not provide
for compensation on the termination thereof, any
compensation paid on the termination thereof shall be deemed
to have accrued in the period immediately following such
termination at a rate equal to the rate per annum of the gains
or profits from such contract received immediately prior to
such termination, but the amount so included in gains or
profits shall not exceed the amount of three years’
remuneration at such rate.
      </Text>

      {/* Income from a business */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Income
from a
business
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      <Text as="span" fontWeight="bold">8.-</Text>(1) A person's income from a business for a year of income is
the person's gains or profits from conducting the business for the year of
income.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) Subject to the provisions of subsection (3), there shall be
included in calculating a person's gains or profits from conducting a
business for a year of income the following amounts derived by the person
from conducting the business during the year of income -
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
      (d) amounts required to be included under paragraph 4 of the
Third Schedule on the realisation of the person's depreciable
assets of the business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (e) amounts derived as consideration for accepting a restriction
on the capacity to conduct the business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (f) gifts and other <Text as="span" fontStyle="italic">ex gratia</Text> payments received by the person in
respect of the business;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (g) amounts derived that are effectively connected with the
business and that would otherwise be included in calculating the person's income from an investment; and
      </Text>

      {/* S. 33 of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
      S. 33 of
Written Laws
(Miscellaneous
Amendments)
<br />
Act No. 7 of
2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textDecoration="line-through">
      (h) other amounts required to be included under Division II of
this Part, Parts IV, V or VI.
      </Text>

      {/* S. 33 of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
      S. 33 of
Written Laws
(Miscellaneous
Amendments)
<br />
Act No. 7 of
2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
      (h) the amount of tax benefit or advantage quantified under
Section 27 or other amounts required to be included under Division II of
this Part, Parts IV, V or VI.
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (3) The following are excluded in calculating a person's gains or
profits from conducting a business-
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) exempt amounts and final withholding payments; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) amounts that are included in calculating the person's
      income from any employment.
      </Text>

       {/* Income from an investment Act No.15 of 2004 s.27 */}
       <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
       Income
from an
investment
<br />
Act No.15
of 2004
s.27
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      <Text as="span" fontWeight="bold">9.-</Text>(1) A person's income from an investment for a year of income
is the person's gains or profits from conducting the investment for the year
of income. 
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) Subject to the provisions of subsection (3), in calculating a
person's gains or profits from conducting an investment for a year of
income the following amounts derived by the person from conducting the
investment during that year of income shall be included, namely -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) any dividend, distribution of a trust, gains of an insured from
life insurance, gains from an interest in an unapproved
retirement fund, interest, natural resource payment, rent or
royalty;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) net gains from the realisation of investment assets of the
investment as calculated under Division III of this Part;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (c) amounts derived as consideration for accepting a restriction
on the capacity to conduct the investment; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (d) other amounts required to be included under Division II of
this Part, Parts IV, V or VI.
      </Text>

      {/* S. 32B of Written Laws (Miscellaneous Amendments) Act No. 7 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500">
      S. 32B of
Written Laws
(Miscellaneous
Amendments)
<br />
Act No. 7 of
2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500">
      (d) the amount of tax benefit or advantage quantified under section
27 of the Act or other amounts required to be included under
Division II of this Part, Parts IV, V or VI.
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      (3) In calculating a person's gains and profits from conducting an
      investment, the amounts shall be excluded, namely -
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) exempt amounts and final withholding payments; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) amounts that are included in calculating the person's income
      from any employment or business.
      </Text>
      
      {/* Subdivision C: Exemption from Tax */}
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision C: Exemption from Tax
      </Text>

      {/* Minister may exempt income from tax */}
      <Text fontSize="md" mt="6" textAlign="left" color="gray.800">
      Minister
may
exempt
income
from tax
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800">
      <Text as="span" fontWeight="bold">10.-</Text>(1) The Minister may, by order in the Gazette, provide –
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (a) that any income or class of incomes accrued in or derived
from the United Republic shall be exempt from tax to the
extent specified in such order; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (b) that any exemption under the Second Schedule shall cease to
have effect either generally or to such extent as may be
specified in such Order.
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800">
      (2) The Minister may, by Order in the Gazette, amend, vary or
replace the Second Schedule. 
      </Text>

      {/* Section 26 of the Written Laws (Miscellenous Amendments) ACt No 2 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
      Section 26 of
the Written
Laws
(Miscellenous
Amendments)
<br />
ACt No 2 of
2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500" textDecoration="line-through">
      (3) Notwithstanding any law to the contrary, no exemption shall be
provided from tax imposed by this Act and no agreement shall be
concluded that affects or purports to affect the application of this Act,
except as provided for by this Act or by way of amendment to this Act.
      </Text>

      {/* Section 26 of the Written Laws (Miscellenous Amendments) ACt No 2 of 2017 */}
      <Text fontSize="md" mt="6" textAlign="left" color="blue.500">
      Section 26 of
the Written
Laws
(Miscellenous
Amendments)
<br />
ACt No 2 of
2017
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500">
      (3) Notwithstanding any law to the contrary, no exemption shall be
provided from tax imposed by this Act and no agreement shall be
concluded that affects or purports to affect the application of this Act,
except as provided for:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
      (a) by the provisions of this Act;
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
      (b) by an agreement:
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="blue.500">
      (i) on a strategic project; <Text as="span" textDecoration="line-through">and</Text>
      </Text>

      {/* Finance Act 2022 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500">
      Finance Act
      2022
      <Text color="brown.800">Written Laws
Financial
Provisions
2022</Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="blue.500">
      (ii) on public interest; and
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
      (iii) for a <Text as="span" color="brown.800">strategic investment</Text> special strategic investment
approved by the National Investment Steering
Committee under the Tanzania Investment Act,
<Text as="span" color="blue.500">as may be approved by the Cabinet</Text>
      </Text>

      {/* Finance No 8 of 2020 s.28, Written Laws Financial Act 2021 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500" >
      <Text color="brown.800" textDecoration="line-through">Finance No 8
of 2020 s.28</Text>
      Written Laws
      Finance Act
      2021
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="brown.800" textDecoration="line-through">
      “(4) The requirement under subsection (3)(b) shall not apply to a strategic
project with a total tax payable not exceeding one billion shillings for the
entire project period.”
      </Text>

      {/* Written Laws Financial Provisions 2022 */}
      <Text fontSize="md" mt="6" textAlign="left" color="brown.800" >
      Written Laws
Financial
Provisions
2022
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="brown.800">
      (4) The exemption granted under this section shall cease to have effect and
the income tax shall become due and payable as if the exemption has not
been granted if such exemption has been enjoyed in any way by another
person not entitled to enjoy similar privileges as are conferred under this
Act.
      </Text>

      {/* Finance Act 2021 */}
      <Text fontSize="md" mt="6" textAlign="left" color="green.500" >
      Finance Act 2021
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="green.500">
      “(4) The requirement under subsection (3)(b) shall not apply to-
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
      (a) a strategic project with a total tax payable not exceeding one billion
shillings for the entire project period; or
      </Text>
      <Text fontSize="md" mt="2" textAlign="center" color="green.500">
      (b) grant agreement, non-concessional or concessional loan agreement
between the Government of the United Republic and a donor or lender where such agreement provides for income tax exemption
      </Text>

      {/* Limitation for exemption section 14 of Finance Act, 2015, Finance Act No 4 of 2018 s. 24 */}
      <Text fontSize="md" mt="6" textAlign="left" color="red.500" >
      Limitation for exemption <br />
      section 14 of Finance Act, 2015
      <Text color="blue.500">Finance Act
No 4 of 2018
s. 24</Text>
      </Text>
      <Text fontSize="md" mt="6" textAlign="center" color="red.500" textDecoration="line-through">
      10A- In exercising powers under this Act, the Minister shall
not grant tax exemption or remission on income or payment derived
from Government project financed by a non concessional loan.
      </Text>

    </Box>
  );
};

export default IncomeTaxBase;
