__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "taskGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 269
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parseHTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 287
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 301
                      },
                      "value": {
                        "type": "Literal",
                        "value": "parseHTML",
                        "raw": "'parseHTML'",
                        "start": 303,
                        "end": 314
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 299,
                      "end": 314
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 329
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Parse HTML & CSS",
                        "raw": "'Parse HTML & CSS'",
                        "start": 331,
                        "end": 349
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 324,
                      "end": 349
                    }
                  ],
                  "start": 289,
                  "end": 355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 355
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "styleLayout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 372
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 386
                      },
                      "value": {
                        "type": "Literal",
                        "value": "styleLayout",
                        "raw": "'styleLayout'",
                        "start": 388,
                        "end": 401
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 384,
                      "end": 401
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 416
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Style & Layout",
                        "raw": "'Style & Layout'",
                        "start": 418,
                        "end": 434
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 411,
                      "end": 434
                    }
                  ],
                  "start": 374,
                  "end": 440
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 440
              }
            ],
            "start": 272,
            "end": 443
          },
          "definite": false,
          "start": 259,
          "end": 443
        }
      ],
      "declare": false,
      "start": 253,
      "end": 443
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "taskNameToGroup",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 507
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 510,
            "end": 512
          },
          "definite": false,
          "start": 492,
          "end": 512
        }
      ],
      "declare": false,
      "start": 486,
      "end": 513
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 521
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 529
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 529
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 548
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 548
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 538,
              "end": 548
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 569
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 569
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 554,
              "end": 569
            }
          ],
          "start": 532,
          "end": 572
        },
        "start": 515,
        "end": 572
      },
      "directive": null,
      "start": 515,
      "end": 573
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 253,
  "end": 573
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 253,
    "end": 258,
    "range": [
      253,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "taskGroups",
    "start": 259,
    "end": 269,
    "range": [
      259,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "parseHTML",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 299,
    "end": 301,
    "range": [
      299,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "String",
    "value": "'parseHTML'",
    "start": 303,
    "end": 314,
    "range": [
      303,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 324,
    "end": 329,
    "range": [
      324,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "String",
    "value": "'Parse HTML & CSS'",
    "start": 331,
    "end": 349,
    "range": [
      331,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "styleLayout",
    "start": 361,
    "end": 372,
    "range": [
      361,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 384,
    "end": 386,
    "range": [
      384,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "String",
    "value": "'styleLayout'",
    "start": 388,
    "end": 401,
    "range": [
      388,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 411,
    "end": 416,
    "range": [
      411,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "String",
    "value": "'Style & Layout'",
    "start": 418,
    "end": 434,
    "range": [
      418,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "taskNameToGroup",
    "start": 492,
    "end": 507,
    "range": [
      492,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 515,
    "end": 521,
    "range": [
      515,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 522,
    "end": 529,
    "range": [
      522,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "taskGroups",
    "start": 538,
    "end": 548,
    "range": [
      538,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "taskNameToGroup",
    "start": 554,
    "end": 569,
    "range": [
      554,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 34
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 34
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 34
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./module.js",
                "raw": "'./module.js'",
                "start": 46,
                "end": 59
              }
            ],
            "optional": false,
            "start": 38,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MainThreadTasks",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 334
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 423
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 429,
                "end": 431
              },
              "expression": false,
              "start": 423,
              "end": 431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 412,
            "end": 431
          }
        ],
        "start": 335,
        "end": 433
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 435,
          "end": 449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainThreadTasks",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 467
        },
        "start": 435,
        "end": 467
      },
      "directive": null,
      "start": 435,
      "end": 468
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 468
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "taskGroups",
    "start": 7,
    "end": 17,
    "range": [
      7,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "taskNameToGroup",
    "start": 19,
    "end": 34,
    "range": [
      19,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "String",
    "value": "'./module.js'",
    "start": 46,
    "end": 59,
    "range": [
      46,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 313,
    "end": 318,
    "range": [
      313,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "MainThreadTasks",
    "start": 319,
    "end": 334,
    "range": [
      319,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 412,
    "end": 423,
    "range": [
      412,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 435,
    "end": 441,
    "range": [
      435,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 442,
    "end": 449,
    "range": [
      442,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "MainThreadTasks",
    "start": 452,
    "end": 467,
    "range": [
      452,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  }
]
```
