override3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 33,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 33,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 29,
                  "end": 33
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 49,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 41,
              "end": 49,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 43,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 45,
                  "end": 49
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 127,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 127,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 98,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 89,
              "end": 98,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 93,
                  "end": 97
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 125,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 116,
              "end": 125,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 118,
                "end": 124,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 120,
                  "end": 124
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 177,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 177,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 168,
                "end": 174,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 170,
                  "end": 174
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 205,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 196,
                "end": 202,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 198,
                  "end": 202
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "decorators": [],
        "name": "DB",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 209,
      "end": 287,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 287,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 257,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 246,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 246,
              "end": 257,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 257,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 285,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 274,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 285,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 283,
                "end": 285,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 276,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 278,
                  "end": 282
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "decorators": [],
        "name": "DD",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 358,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 308,
        "end": 358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 314,
            "end": 328,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 317,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 317,
              "end": 328,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 328,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 319,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 321,
                  "end": 325
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 333,
            "end": 356,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 356,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 354,
                "end": 356,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 347,
                "end": 353,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 349,
                  "end": 353
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "decorators": [],
        "name": "EB",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 306,
        "end": 307,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
