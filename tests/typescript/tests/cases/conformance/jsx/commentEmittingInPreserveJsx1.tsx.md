__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 35,
            "end": 38
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 34,
          "end": 39
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    // Not Comment\n",
            "raw": "\n    // Not Comment\n",
            "start": 39,
            "end": 59
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 61,
            "end": 64
          },
          "start": 59,
          "end": 65
        },
        "start": 34,
        "end": 65
      },
      "directive": null,
      "start": 34,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 69,
            "end": 72
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 68,
          "end": 73
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    // Not Comment\n    ",
            "raw": "\n    // Not Comment\n    ",
            "start": 73,
            "end": 97
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 98,
              "end": 131
            },
            "start": 97,
            "end": 132
          },
          {
            "type": "JSXText",
            "value": "\n    // Another not Comment\n",
            "raw": "\n    // Another not Comment\n",
            "start": 132,
            "end": 160
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 162,
            "end": 165
          },
          "start": 160,
          "end": 166
        },
        "start": 68,
        "end": 166
      },
      "directive": null,
      "start": 68,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 170,
            "end": 173
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 169,
          "end": 174
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    // Not Comment\n    ",
            "raw": "\n    // Not Comment\n    ",
            "start": 174,
            "end": 198
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Literal",
              "value": "Hi",
              "raw": "\"Hi\"",
              "start": 236,
              "end": 240
            },
            "start": 198,
            "end": 246
          },
          {
            "type": "JSXText",
            "value": "\n    // Another not Comment\n",
            "raw": "\n    // Another not Comment\n",
            "start": 246,
            "end": 274
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 276,
            "end": 279
          },
          "start": 274,
          "end": 280
        },
        "start": 169,
        "end": 280
      },
      "directive": null,
      "start": 169,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 284,
            "end": 287
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 283,
          "end": 288
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    /* Not Comment */\n    ",
            "raw": "\n    /* Not Comment */\n    ",
            "start": 288,
            "end": 315
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Literal",
              "value": "Hi",
              "raw": "\"Hi\"",
              "start": 353,
              "end": 357
            },
            "start": 315,
            "end": 363
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 363,
            "end": 364
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 366,
            "end": 369
          },
          "start": 364,
          "end": 370
        },
        "start": 283,
        "end": 370
      },
      "directive": null,
      "start": 283,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    // Not Comment\n",
    "start": 39,
    "end": 59,
    "range": [
      39,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    // Not Comment\n    ",
    "start": 73,
    "end": 97,
    "range": [
      73,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    // Another not Comment\n",
    "start": 132,
    "end": 160,
    "range": [
      132,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 162,
    "end": 165,
    "range": [
      162,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    // Not Comment\n    ",
    "start": 174,
    "end": 198,
    "range": [
      174,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 236,
    "end": 240,
    "range": [
      236,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    // Another not Comment\n",
    "start": 246,
    "end": 274,
    "range": [
      246,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 284,
    "end": 287,
    "range": [
      284,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    /* Not Comment */\n    ",
    "start": 288,
    "end": 315,
    "range": [
      288,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 353,
    "end": 357,
    "range": [
      353,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  }
]
```
