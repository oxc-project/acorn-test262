__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 937,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 158,
            "name": "two",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 145,
                "end": 158,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 147,
                    "end": 156,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 161,
            "end": 173,
            "properties": [
              {
                "type": "Property",
                "start": 163,
                "end": 171,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 171,
                  "value": "two",
                  "raw": "'two'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 208,
            "name": "one",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 186,
                "end": 208,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 188,
                    "end": 206,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 211,
            "end": 223,
            "properties": [
              {
                "type": "Property",
                "start": 213,
                "end": 221,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 216,
                  "end": 221,
                  "value": "one",
                  "raw": "'one'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 937,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 246,
        "name": "doSomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 265,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 265,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 937,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 560,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 566,
                "end": 597,
                "id": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 571,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 574,
                  "end": 597,
                  "test": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 584,
                    "name": "condition",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 591,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 597,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 604,
            "end": 620,
            "expression": {
              "type": "AssignmentExpression",
              "start": 604,
              "end": 619,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 604,
                "end": 611,
                "object": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 609,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 611,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 614,
                "end": 619,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 899,
            "end": 916,
            "expression": {
              "type": "AssignmentExpression",
              "start": 899,
              "end": 915,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 899,
                "end": 906,
                "object": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 904,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 906,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 909,
                "end": 915,
                "value": "foo2",
                "raw": "'foo2'"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 922,
            "end": 935,
            "argument": {
              "type": "Identifier",
              "start": 929,
              "end": 934,
              "name": "three",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 868,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 158,
            "name": "two",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 145,
                "end": 158,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 147,
                    "end": 156,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 161,
            "end": 173,
            "properties": [
              {
                "type": "Property",
                "start": 163,
                "end": 171,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 171,
                  "value": "two",
                  "raw": "'two'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 208,
            "name": "one",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 186,
                "end": 208,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 188,
                    "end": 206,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 211,
            "end": 223,
            "properties": [
              {
                "type": "Property",
                "start": 213,
                "end": 221,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 216,
                  "end": 221,
                  "value": "one",
                  "raw": "'one'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 867,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 246,
        "name": "doSomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 265,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 265,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 867,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 528,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 504,
                  "end": 527,
                  "test": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 514,
                    "name": "condition",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 527,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 534,
            "end": 550,
            "expression": {
              "type": "AssignmentExpression",
              "start": 534,
              "end": 549,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 534,
                "end": 541,
                "object": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 539,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 544,
                "end": 549,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 829,
            "end": 846,
            "expression": {
              "type": "AssignmentExpression",
              "start": 829,
              "end": 845,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 829,
                "end": 836,
                "object": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 834,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 839,
                "end": 845,
                "value": "foo2",
                "raw": "'foo2'"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 852,
            "end": 865,
            "argument": {
              "type": "Identifier",
              "start": 859,
              "end": 864,
              "name": "three",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 951,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "name": "one",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 158,
                "end": 180,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 160,
                    "end": 178,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 170,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 172,
                        "end": 178
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 183,
            "end": 195,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 193,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 188,
                  "end": 193,
                  "value": "one",
                  "raw": "'one'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 221,
            "name": "two",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 208,
                "end": 221,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 210,
                    "end": 219,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 211,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "value": "two",
                  "raw": "'two'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 950,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 259,
        "name": "doSomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 278,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 278,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 950,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 573,
            "end": 611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 579,
                "end": 610,
                "id": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 584,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 587,
                  "end": 610,
                  "test": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 597,
                    "name": "condition",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 604,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 607,
                    "end": 610,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 617,
            "end": 633,
            "expression": {
              "type": "AssignmentExpression",
              "start": 617,
              "end": 632,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 617,
                "end": 624,
                "object": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 622,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 624,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 627,
                "end": 632,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 912,
            "end": 929,
            "expression": {
              "type": "AssignmentExpression",
              "start": 912,
              "end": 928,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 912,
                "end": 919,
                "object": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 917,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 919,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 922,
                "end": 928,
                "value": "foo2",
                "raw": "'foo2'"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 935,
            "end": 948,
            "argument": {
              "type": "Identifier",
              "start": 942,
              "end": 947,
              "name": "three",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 880,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "name": "one",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 158,
                "end": 180,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 160,
                    "end": 178,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 170,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 172,
                        "end": 178
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 183,
            "end": 195,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 193,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 188,
                  "end": 193,
                  "value": "one",
                  "raw": "'one'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 221,
            "name": "two",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 208,
                "end": 221,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 210,
                    "end": 219,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 211,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "value": "two",
                  "raw": "'two'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 880,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 259,
        "name": "doSomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 278,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 278,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 880,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 503,
            "end": 541,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 509,
                "end": 540,
                "id": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 514,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 517,
                  "end": 540,
                  "test": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 527,
                    "name": "condition",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 534,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 540,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 547,
            "end": 563,
            "expression": {
              "type": "AssignmentExpression",
              "start": 547,
              "end": 562,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 547,
                "end": 554,
                "object": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 552,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 554,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 557,
                "end": 562,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 859,
            "expression": {
              "type": "AssignmentExpression",
              "start": 842,
              "end": 858,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 842,
                "end": 849,
                "object": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 847,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 849,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 852,
                "end": 858,
                "value": "foo2",
                "raw": "'foo2'"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 865,
            "end": 878,
            "argument": {
              "type": "Identifier",
              "start": 872,
              "end": 877,
              "name": "three",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
