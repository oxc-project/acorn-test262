__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 70,
  "end": 577,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 127,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 127,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 93,
            "end": 102,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 101,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 97,
                "end": 101
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 125,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 124,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 120,
                "end": 124
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "decorators": [],
        "name": "TestNull",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 129,
      "end": 228,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 136,
        "end": 228,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 166,
          "end": 228,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 170,
              "end": 189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 187,
                "end": 189,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "decorators": [],
                "name": "inner",
                "optional": false
              },
              "params": []
            },
            {
              "type": "ExpressionStatement",
              "start": 192,
              "end": 210,
              "expression": {
                "type": "AssignmentExpression",
                "start": 192,
                "end": 209,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 192,
                  "end": 202,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 197,
                    "decorators": [],
                    "name": "inner",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 205,
                  "end": 209,
                  "raw": "null",
                  "value": null
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 213,
              "end": 226,
              "argument": {
                "type": "Identifier",
                "start": 220,
                "end": 225,
                "decorators": [],
                "name": "inner",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 153,
          "decorators": [],
          "name": "testNull",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 155,
          "end": 165,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 157,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 157,
              "end": 165,
              "decorators": [],
              "name": "TestNull",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 230,
      "end": 288,
      "body": {
        "type": "TSInterfaceBody",
        "start": 250,
        "end": 288,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 254,
            "end": 263,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 262,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 266,
            "end": 286,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 270,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 285,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 272,
                "end": 285,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 272,
                    "end": 278
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 281,
                    "end": 285
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 249,
        "decorators": [],
        "name": "TestNull2",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 290,
      "end": 391,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 297,
        "end": 391,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 329,
          "end": 391,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 333,
              "end": 352,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 352,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 342,
                "end": 347,
                "decorators": [],
                "name": "inner",
                "optional": false
              },
              "params": []
            },
            {
              "type": "ExpressionStatement",
              "start": 355,
              "end": 373,
              "expression": {
                "type": "AssignmentExpression",
                "start": 355,
                "end": 372,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 355,
                  "end": 365,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 360,
                    "decorators": [],
                    "name": "inner",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 365,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 368,
                  "end": 372,
                  "raw": "null",
                  "value": null
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 376,
              "end": 389,
              "argument": {
                "type": "Identifier",
                "start": 383,
                "end": 388,
                "decorators": [],
                "name": "inner",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 306,
          "end": 315,
          "decorators": [],
          "name": "testNull2",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 317,
          "end": 328,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 319,
            "end": 328,
            "typeName": {
              "type": "Identifier",
              "start": 319,
              "end": 328,
              "decorators": [],
              "name": "TestNull2",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 393,
      "end": 460,
      "body": {
        "type": "TSInterfaceBody",
        "start": 417,
        "end": 460,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 421,
            "end": 430,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 429,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 425,
                "end": 429
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 433,
            "end": 458,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 446,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 457,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 448,
                "end": 457
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 416,
        "decorators": [],
        "name": "TestUndefined",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 462,
      "end": 576,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 469,
        "end": 576,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 509,
          "end": 576,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 513,
              "end": 532,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 532,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 522,
                "end": 527,
                "decorators": [],
                "name": "inner",
                "optional": false
              },
              "params": []
            },
            {
              "type": "ExpressionStatement",
              "start": 535,
              "end": 558,
              "expression": {
                "type": "AssignmentExpression",
                "start": 535,
                "end": 557,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 535,
                  "end": 545,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 540,
                    "decorators": [],
                    "name": "inner",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 545,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 557,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 561,
              "end": 574,
              "argument": {
                "type": "Identifier",
                "start": 568,
                "end": 573,
                "decorators": [],
                "name": "inner",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 478,
          "end": 491,
          "decorators": [],
          "name": "testUndefined",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 493,
          "end": 508,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 495,
            "end": 508,
            "typeName": {
              "type": "Identifier",
              "start": 495,
              "end": 508,
              "decorators": [],
              "name": "TestUndefined",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
