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
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "name": "TestNull",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 127,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 93,
            "end": 102,
            "typeParameters": null,
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
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 124,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 120,
                "end": 124
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 129,
      "end": 228,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 136,
        "end": 228,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 153,
          "name": "testNull",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 166,
          "end": 228,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 170,
              "end": 189,
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 187,
                "end": 189,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
                  "object": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 197,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 205,
                  "end": 209,
                  "value": null,
                  "raw": "null"
                }
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 213,
              "end": 226,
              "argument": {
                "type": "Identifier",
                "start": 220,
                "end": 225,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
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
              "name": "TestNull",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 230,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 249,
        "name": "TestNull2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 250,
        "end": 288,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 254,
            "end": 263,
            "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 270,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 290,
      "end": 391,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 297,
        "end": 391,
        "id": {
          "type": "Identifier",
          "start": 306,
          "end": 315,
          "name": "testNull2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 329,
          "end": 391,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 333,
              "end": 352,
              "id": {
                "type": "Identifier",
                "start": 342,
                "end": 347,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 352,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
                  "object": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 360,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 365,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 368,
                  "end": 372,
                  "value": null,
                  "raw": "null"
                }
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 376,
              "end": 389,
              "argument": {
                "type": "Identifier",
                "start": 383,
                "end": 388,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
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
              "name": "TestNull2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 393,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 416,
        "name": "TestUndefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 417,
        "end": 460,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 421,
            "end": 430,
            "typeParameters": null,
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
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 446,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 457,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 448,
                "end": 457
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 462,
      "end": 576,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 469,
        "end": 576,
        "id": {
          "type": "Identifier",
          "start": 478,
          "end": 491,
          "name": "testUndefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 509,
          "end": 576,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 513,
              "end": 532,
              "id": {
                "type": "Identifier",
                "start": 522,
                "end": 527,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 532,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
                  "object": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 540,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 545,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 557,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 561,
              "end": 574,
              "argument": {
                "type": "Identifier",
                "start": 568,
                "end": 573,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
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
              "name": "TestUndefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
