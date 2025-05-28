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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 174,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 158,
            "decorators": [],
            "name": "two",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 171,
                  "value": "two",
                  "raw": "'two'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 224,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 208,
            "decorators": [],
            "name": "one",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 216,
                  "end": 221,
                  "value": "one",
                  "raw": "'one'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 265,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 265,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 937,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 560,
            "end": 598,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 566,
                "end": 597,
                "id": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 571,
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 574,
                  "end": 597,
                  "test": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 584,
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 591,
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 597,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 611,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 906,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 174,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 158,
            "decorators": [],
            "name": "two",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 171,
                  "value": "two",
                  "raw": "'two'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 224,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 208,
            "decorators": [],
            "name": "one",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 216,
                  "end": 221,
                  "value": "one",
                  "raw": "'one'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 265,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 265,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 867,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 528,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 504,
                  "end": 527,
                  "test": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 514,
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 527,
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "decorators": [],
            "name": "one",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 188,
                  "end": 193,
                  "value": "one",
                  "raw": "'one'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 237,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 221,
            "decorators": [],
            "name": "two",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "value": "two",
                  "raw": "'two'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 278,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 278,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 950,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 573,
            "end": 611,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 579,
                "end": 610,
                "id": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 584,
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 587,
                  "end": 610,
                  "test": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 597,
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 604,
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 607,
                    "end": 610,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 624,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 919,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "decorators": [],
            "name": "one",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 188,
                  "end": 193,
                  "value": "one",
                  "raw": "'one'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 237,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 221,
            "decorators": [],
            "name": "two",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "value": "two",
                  "raw": "'two'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 278,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 278,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 880,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 503,
            "end": 541,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 509,
                "end": 540,
                "id": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 514,
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 517,
                  "end": 540,
                  "test": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 527,
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 534,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 540,
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 554,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 849,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
