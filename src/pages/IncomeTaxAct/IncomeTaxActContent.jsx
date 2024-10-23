import React, { useEffect } from 'react';
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const IncomeTaxActContent = () => {
  
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
    <Box
      mt="24px"
      px={{ md: "20px", base: "10px" }} // Padding for spacing
      maxW="1170px"  // Set maximum width
      margin="0 auto"  // Center the content on the page
      fontFamily="Poppins"
      userSelect="none"  // Prevent text selection
    >

      {/* Existing content... */}
      {/* Chapter Title */}
      <Text fontWeight="bold" fontSize="lg" mt="48px" mb="4" textAlign="center" color="gray.800">
        CHAPTER 332
      </Text>
      <Text fontSize="lg" mb="4" textAlign="center" color="gray.800" textTransform="uppercase">
        THE INCOME TAX ACT
      </Text>
      {/* a divider line */}
      <Divider
        mb="10px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      <Text textAlign="center" mb="8" color="gray.600">
        [PRINCIPAL LEGISLATION]
      </Text>

      {/* Arrangement of Sections */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        ARRANGEMENT OF SECTIONS
      </Text>

      {/* PART I: Preliminary */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART I: PRELIMINARY
      </Text>
      <Text mt="2">1. Short Title.</Text>
      <Text mt="2">2. Application.</Text>
      <Text mt="2">3. Interpretation.</Text>

      {/* PART II: Imposition of Income Tax */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART II: IMPOSITION OF INCOME TAX
      </Text>
      <Text mt="2">4. Charge of Tax.</Text>

      {/* PART III: Income Tax Base */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART III: INCOME TAX BASE
      </Text>

      {/* Division I: Calculating the Income Tax Base */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: Calculating the Income Tax Base
      </Text>

      {/* Subdivision A: Total Income */}
      <Text fontSize="md" mt="2" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision A: Total Income
      </Text>
      <Text mt="2">5. Total Income.</Text>

      {/* Subdivision B: Chargeable Income */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision B: Chargeable Income
      </Text>
      <Text mt="2">6. Chargeable Income.</Text>
      <Text mt="2">7. Income from Employment.</Text>
      <Text mt="2">8. Income from Business.</Text>
      <Text mt="2">9. Income from Investment.</Text>

      {/* Subdivision C: Exemption From Tax */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision C: Exemption From Tax
      </Text>
      <Text mt="2">10. Minister may exempt income from tax.</Text>

      {/* Subdivision D: Deductions */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision D: Deductions
      </Text>
      <Text mt="2">11. General principles of deductions.</Text>
      <Text mt="2">12. Interest.</Text>
      <Text mt="2">13. Trading stock.</Text>
      <Text mt="2">14. Repair and maintenance expenditure.</Text>
      <Text mt="2">15. Agriculture, Research Development and Environmental Expenditure.</Text>
      <Text mt="2">16. Gifts to Public, Charitable and Religious Institutions.</Text>
      <Text mt="2">17. Depreciation Allowances for depreciable assets.</Text>
      <Text mt="2">18. Losses on Realisation of Business Assets and Liabilities.</Text>
      <Text mt="2">19. Losses from a Business or Investment.</Text>

      {/* Division II: Rules Governing Amounts Used in Calculating the Income Tax Base */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="capitalize">
        Division II: Rules Governing Amounts Used in Calculating the Income Tax Base
      </Text>

      {/* Subdivision A: Tax Accounting and Timing */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision A: Tax Accounting and Timing
      </Text>
      <Text mt="2">20. Year of income.</Text>
      <Text mt="2">21. Basis of accounting for income tax purposes.</Text>
      <Text mt="2">22. Cash Basis Accounting.</Text>
      <Text mt="2">23. Accrual Basis Accounting.</Text>
      <Text mt="2">24. Claim of right.</Text>
      <Text mt="2">25. Reverse of amounts including bad debts.</Text>
      <Text mt="2">26. Long-term contracts.</Text>

      {/* Subdivision B: Quantification, Allocation and Characterisation of Amounts */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision B: Quantification, Allocation and Characterisation of Amounts
      </Text>
      <Text mt="2">27. Quantification According to Market Value.</Text>
      <Text mt="2">28. Quantification in Shillings.</Text>
      <Text mt="2">29. Indirect Payments.</Text>
      <Text mt="2">30. Jointly Owned Investment.</Text>
      <Text mt="2">31. Compensation and Recovery Payments.</Text>
      <Text mt="2">32. Annuities, Instalment Sales and Finance Leases.</Text>
      <Text mt="2">33. Transfer Pricing and Other Arrangements Between Associates.</Text>
      <Text mt="2">34. Income Splitting.</Text>
      <Text mt="2">35. Tax Avoidance Arrangements. Refer to section 8 of TAA, 2014.</Text>

      {/* Division III: Assets and Liabilities */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="capitalize">
        Division III: Assets and Liabilities
      </Text>

      {/* Subdivision A: Central Concepts */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision A: Central Concepts
      </Text>
      <Text mt="2">36. Calculation of Gains and Losses.</Text>
      <Text mt="2">37. Cost of Asset.</Text>
      <Text mt="2">38. Incomings for an Asset.</Text>
      <Text mt="2">39. Realisation.</Text>
      <Text mt="2">40. Application of this Division to Liabilities.</Text>
      <Text mt="2">41. Reverse, Quantification and Compensation for Costs and Incomings.</Text>

      {/* Subdivision B: Special Rules */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision B: Special Rules
      </Text>
      <Text mt="2">42. Realisation with Retention of Asset.</Text>
      <Text mt="2">43. Transfer of Asset to Spouse or Former Spouse.</Text>
      <Text mt="2">44. Transfer of Asset to an Associate or for No Consideration.</Text>
      <Text mt="2">45. Involuntary Realisation of Asset with Replacement.</Text>
      <Text mt="2">46. Realisation by Separation.</Text>
      <Text mt="2">47. Apportionment of Costs and Incomings.</Text>

      {/* PART IV: Rules Applicable to Particular Types of Persons */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART IV: RULES APPLICABLE TO PARTICULAR TYPES OF PERSONS
      </Text>

      {/* Division I: In General */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: In General
      </Text>

      {/* Subdivision A: Partnerships */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision A: Partnerships
      </Text>
      <Text mt="2">48. Principles of Taxation.</Text>
      <Text mt="2">49. Partnership Income or Loss.</Text>
      <Text mt="2">50. Taxation of Partners.</Text>
      <Text mt="2">51. Cost and Incomings of Partner’s Membership Interest in Partnership.</Text>

      {/* Subdivision B: Trusts */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision B: Trusts
      </Text>
      <Text mt="2">52. Taxation of Trusts.</Text>

      {/* Subdivision C: Corporations */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic">
        Subdivision C: Corporations
      </Text>
      <Text mt="2">53. Taxation of Corporations.</Text>
      <Text mt="2">54. Taxation of Shareholders.</Text>

      {/* Division II: General Provisions Applicable to Entities */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division II: General Provisions Applicable to Entities
      </Text>
      <Text mt="2">55. Asset Dealings Between Entity and Members.</Text>
      <Text mt="2">56. Change in Control.</Text>
      <Text mt="2">57. Income or Dividend Stripping.</Text>

      {/* PART V SPECIAL INDUSTRIES */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART V: SPECIAL INDUSTRIES
      </Text>

      {/* Division I: Insurance Business */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: Insurance Business
      </Text>
      <Text mt="2">58. General Insurance Business.</Text>
      <Text mt="2">59. Life Insurance Business.</Text>
      <Text mt="2">60. Proceeds from Insurance.</Text>

      {/* Division II: Retirement Savings */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division II: Retirement Savings
      </Text>
      <Text mt="2">61. Retirement Contributions to Approved Retirement Fund.</Text>
      <Text mt="2">62. Taxation of Retirement Funds.</Text>
      <Text mt="2">63. Retirement Payments.</Text>
      
      {/* Division III: Charitable Organisations, Clubs and Trade Associations */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division III: Charitable Organisations, Clubs and Trade Associations
      </Text>
      <Text mt="2">64. Charitable Organisations.</Text>
      <Text mt="2">65. Clubs and Trade Associations.</Text>

      {/* Division IV: Minerals */}
      <Text fontSize="md" mt="6" textAlign="center" color="green.500" textTransform="uppercase">
        Division IV: Minerals
      </Text>

      {/* Subdivision A: Prospecting and Mining */}
      <Text fontSize="md" mt="4" textAlign="center" color="green.500" fontStyle="italic">
        Subdivision A: Prospecting and Mining
      </Text>
      <Text mt="2" textAlign="start" color="green.500">65A. Application of the subdivision.</Text>
      <Text mt="2" textAlign="start" color="green.500">65B. Principles of taxation.</Text>
      <Text mt="2" textAlign="start" color="green.500">65C. Separate mining operations.</Text>
      <Text mt="2" textAlign="start" color="green.500">65D. Income from mining operations.</Text>
      <Text mt="2" textAlign="start" color="green.500">65E. Deduction for mining operations.</Text>
      <Text mt="2" textAlign="start" color="green.500">65F. Losses from mining operations.</Text>
      <Text mt="2" textAlign="start" color="green.500">65G. Bonus payment.</Text>
      <Text mt="2" textAlign="start" color="green.500">65H. Realisation of mining rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65I. Rehabilitation fund.</Text>
      
      {/* Subdivision B: Processing, Smelting and Refining */}
      <Text fontSize="md" mt="6" textAlign="center" color="green.500" textTransform="uppercase">
        Subdivision B: Processing, Smelting and Refining
      </Text>
      <Text mt="2" textAlign="start" color="green.500">65J. License for conducting processing, smelting and refining.</Text>

      {/* Division V: Petroleum */}
      <Text fontSize="md" mt="6" textAlign="center" color="green.500" textTransform="uppercase">
        Division V: Petroleum
      </Text>

      {/* Subdivision A: Petroleum Operations */}
      <Text fontSize="md" mt="4" textAlign="center" color="green.500" fontStyle="italic">
        Subdivision A: Petroleum Operations
      </Text>
      <Text mt="2" textAlign="start" color="green.500">65K. Principles of taxation.</Text>
      <Text mt="2" textAlign="start" color="green.500">65L. Separate petroleum rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65M. Income from petroleum rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65N. Deductions for petroleum rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65O. Losses from petroleum rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65P. Bonus payments.</Text>
      <Text mt="2" textAlign="start" color="green.500">65Q. Realisation of petroleum rights.</Text>
      <Text mt="2" textAlign="start" color="green.500">65R. Decommission funds.</Text>

      {/* Subdivision B: Midstream and Downstream Activities */}
      <Text fontSize="md" mt="6" textAlign="center" color="green.500" fontStyle="italic">
        Subdivision B: Midstream and Downstream Activities
      </Text>
      <Text mt="2" textAlign="start" color="green.500">65S. Midstream and downstream activities.</Text>
      
      {/* PART VI: INTERNATIONAL */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART VI: INTERNATIONAL
      </Text>

      {/* Division I: Residence and Source */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: Residence and Source
      </Text>
      <Text mt="2">66. Resident Persons.</Text>
      <Text mt="2">67. Source of Income and Loss.</Text>
      <Text mt="2">68. Source of Directly Included and Deducted Amounts.</Text>
      <Text mt="2">69. Source of Payments.</Text>

      {/* Division II: Permanent Establishments */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division II: Permanent Establishments
      </Text>
      <Text mt="2">70. Principles of Taxation.</Text>
      <Text mt="2">71. Calculating the Income of a Permanent Establishment.</Text>
      <Text mt="2">72. Repatriated Income of Domestic Permanent Establishment.</Text>

      {/* Division III: Controlled Foreign Trusts and Corporations */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division III: Controlled Foreign Trusts and Corporations
      </Text>
      <Text mt="2">73. Principles of Taxation.</Text>
      <Text mt="2">74. Unallocated Income of Controlled Foreign Trust or Corporation.</Text>
      <Text mt="2">75. Taxation of Members of Controlled Foreign Trusts and Corporations.</Text>
      <Text mt="2">76. Cost and Incomings of Member's Interest in Controlled Foreign Trust or Corporation.</Text>
    
      {/* PART VII: TAX PAYMENT PROCEDURE */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        PART VII: TAX PAYMENT PROCEDURE
      </Text>

      {/* Division I: General Obligations */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Division I: General Obligations
      </Text>
      <Text mt="2">78. Types of Tax and Methods of Payment.</Text>
      <Text mt="2">
        79. Time for Payment of Tax <Text as="span" color="red.500">also refer to section 54 of TAA, 2014</Text>.
      </Text>
      <Text mt="2" color="red.500" textDecoration="line-through">
        80. Maintenance of Documentation.
      </Text>
      <Text mt="2" color="red.500" textDecoration="line-through">
        80A. Obligation to issue receipt.
      </Text>

      {/* Division II: Income Tax Payable by Withholding */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        Division II: Income Tax Payable by Withholding
      </Text>

      {/* Subdivision A: Withholding Obligations */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" fontStyle="italic" textTransform="capitalize">
        Subdivision A: Withholding Obligations
      </Text>
      <Text mt="2">81. Withholding by Employers.</Text>
      <Text mt="2">82. Withholding from Investment Returns.</Text>
      <Text mt="2">83. Withholding from Service Fees.</Text>
      <Text mt="2">83A. Withholding of Income Tax for other goods and services.</Text>

      {/* Subdivision B: Procedure Applicable to Withholding */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize" fontStyle="italic">
        Subdivision B: Procedure Applicable to Withholding
      </Text>
      <Text mt="2">84. Statements and Payments of Tax Withheld or Treated as Withheld.</Text>
      <Text mt="2">85. Withholding Certificates.</Text>
      <Text mt="2">86. Final Withholding Payments.</Text>
      <Text mt="2">87. Credit for Non-Final Withholding Tax.</Text>

      {/* Division III: Income Tax Payable by Instalment */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        Division III: Income Tax Payable by Instalment
      </Text>
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize">
        Income Tax Payable by Instalment
      </Text>
      <Text mt="2">88. Payment of Income Tax by Quarterly Instalment.</Text>
      <Text mt="2">89. Statement of Estimated Tax Payable.</Text>
      <Text mt="2">90. Single Instalment at Time of Realisation or Receipt.</Text>

      {/* Division IV: Income Tax Payable on Assessment */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        Division IV: Income Tax Payable on Assessment
      </Text>

      {/* Subdivision A: Returns */}
      <Text fontSize="md" mt="4" textAlign="center" color="gray.800" textTransform="capitalize" fontStyle="italic">
        Subdivision A: Returns
      </Text>
      <Text mt="2">91. Returns of Income.</Text>
      <Text mt="2">92. Return of Income Not Required.</Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          93. Extension of Time to File Return of Income. 
        </Text> refer to section 39 of TAA, 2014.
      </Text>

      {/* Subdivision B: Assessments */}
      <Text fontSize="md" mt="6" textAlign="center" color="gray.800" textTransform="capitalize" fontStyle="italic">
        Subdivision B: Assessments
      </Text>
      <Text mt="2">94. Self-Assessment.</Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">95. Jeopardy Assessment.</Text> refer to section 47 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">96. Adjusted Assessment.</Text> refer to section 48 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">97. Notice of Assessment.</Text> refer to section 49 of TAA, 2014.
      </Text>

      {/* PART VIII: NON-COMPLIANCE */}
      <Text fontSize="md" mt="6" textAlign="center" color="red.500" textDecoration="line-through" textTransform="uppercase">
        PART VIII: NON-COMPLIANCE
      </Text>

      {/* Division I: Interest and Penalties */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division I: Interest and Penalties
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          98. Penalty for Failure to Maintain Documents or File Statement or Return of Income.
        </Text> refer to section 77 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          99. Interest for Understating Estimated Tax Payable by Instalment.
        </Text> refer to section 75 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          100. Interest for Failure to Pay Tax
        </Text> refer to section 76 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          101. Penalty for Making False or Misleading Statements.
        </Text> refer to section 79 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          102. Penalty for Aiding and Abetting.
        </Text> refer to section 80 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          103. Assessment of Interest and Penalties.
        </Text> refer to section 81 of TAA, 2014.
      </Text>

      {/* Division II: Offences */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division II: Offences
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          104. Offence of Failure to Comply with Act.
        </Text> refer to section 82 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          105. Offence of Failure to Pay Tax.
        </Text> refer to section 83 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          106. Offence of Making False or Misleading Statements. 
        </Text> refer to section 84 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          107. Offence of Impeding Tax Administration.
        </Text> refer to section 85 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          108. Offences by Authorised and Unauthorised Persons.
        </Text> refer to section 87 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          109. Offence of Aiding or Abetting.
        </Text> refer to section 89 of TAA, 2014.
      </Text>

      {/* Division III: Recovery of Tax from Tax Debtor */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division III: Recovery of Tax from Tax Debtor
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          110. Suit for Unpaid Tax.
        </Text> refer to section 59 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          111. Security for Income Tax Payable by Withholding. 
        </Text> refer to section 60 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          112. Charge Over Assets.
        </Text> refer to section 61 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          113. Sale of Charged Assets.
        </Text> refer to section 62 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          114. Departure Prohibition Order.
        </Text> refer to section 63 of TAA, 2014.
      </Text>

      {/* Division IV: Third Party Liability */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division IV: Third Party Liability
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          115. Officers of Entities.
        </Text> refer to section 88 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          116. Recovery of Tax from Receiver. 
        </Text> refer to section 66 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          117. Recovery of Tax from Person Owing Money to Tax Debtor. 
        </Text> refer to section 68 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          113. Sale of Charged Assets.
        </Text> refer to section 62 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          118. Recovery of Tax from Agent of Non-resident.
        </Text> refer to section 69 of TAA, 2014.
      </Text>

      {/* Division V: Proceedings Under Divisions II, III and IV */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division V: Proceedings Under Divisions II, III and IV
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          119. Compounding Offences.
        </Text> refer to section 92 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          120. Officer May Appear. 
        </Text> Not refered in TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          121. Venue. 
        </Text> Not refered in TAA, 2014
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          122. Admissibility of Documents.
        </Text> Not refered in TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          123. Proof of Tax Payable.
        </Text> Not refered in TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          124. Assessments and Related Decisions Unaffected.
        </Text>  Not refered in TAA, 2014.
      </Text>

      {/* PART IX: REMISSION AND REFUND */}
      <Text fontSize="md" mt="6" textAlign="center" color="red.500" textDecoration="line-through" textTransform="uppercase">
        PART IX: REMISSION AND REFUND
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          125. Remission.
        </Text> refer to section 70 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          126. Refunds and Set-Off.
        </Text> refer to section 71 of TAA, 2014
      </Text>

      {/* PART X: ADMINISTRATION */}
      <Text fontSize="md" mt="6" textAlign="center" textTransform="uppercase">
        PART X: ADMINISTRATION
      </Text>

      {/* Division I: The Commissioner and Other Officers */}
      <Text fontSize="md" mt="4" textAlign="center" color="red.500" textDecoration="line-through" textTransform="capitalize">
        Division I: The Commissioner and Other Officers
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          127. Delegation by the Commissioner.
        </Text> refer to section 16 of TAA, 2014.
      </Text>

      {/* Division II: Official Documentation and Registration */}
      <Text fontSize="md" mt="4" textAlign="center" textTransform="capitalize">
        Division II: Official Documentation and Registration
      </Text>
      <Text mt="2">
        128. International Agreements.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          129. Regulations.
        </Text> refer to section 98 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          130. Practice Notes.
        </Text> refer to section 9 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          131. Private Rulings.
        </Text> refer to section 11 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          132. Form of Documentation.
        </Text> refer to section 30 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          133. Tax Identification Number.
        </Text> refer to section 22&23 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          134. Tax Consultants.
        </Text> refer to section 28 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          135. Certification of Estimates and Returns.
        </Text> refer to section 38 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          136. Filing and Service of Documents.
        </Text> refer to section 33 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          136A.Electronic document.
        </Text> refer to section 34 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          137. Authorised and Defective Documents.
        </Text> refer to section 31 of TAA, 2014.
      </Text>

      {/* Division III: Audit and Information Collection */}
      <Text fontSize="md" mt="4" textAlign="center" textTransform="capitalize">
        Division III: Audit and Information Collection
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          138. Commissioner's Access to Information.
        </Text> refer to section 42 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          139. Notice to Obtain Information.
        </Text> refer to section 44 of TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          139A. Electronic evidence
        </Text> no reference in TAA, 2014.
      </Text>
      <Text mt="2">
        <Text as="span" color="red.500" textDecoration="line-through">
          140. Official Secrecy.
        </Text> refer to section 21 of TAA, 2014.
      </Text>

      {/* PART XI: TRANSITIONAL */}
      <Text fontSize="md" mt="6" textAlign="center" textTransform="uppercase">
        PART XI: TRANSITIONAL
      </Text>
      <Text mt="2">
        141. Repeal.
      </Text><Text mt="2">
        142. Transition.
      </Text><Text mt="2">
        143. Agreements and Certificates for fiscal stability.
      </Text><Text mt="2">
        144. Assets and liabilities at commencement.
      </Text><Text mt="2">
        145. Mining.
      </Text>

      {/* a divider line */}
      <Divider
        mb="10px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />
      
      <Heading mt="5">
        TO BE CONTINUED...
      </Heading>
    </Box>
  );
};

export default IncomeTaxActContent;
