__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 185,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 105,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 105,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 105,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 89,
                    "end": 99,
                    "argument": {
                      "type": "Literal",
                      "start": 96,
                      "end": 98,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 78,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 72,
                  "end": 78
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 149,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 147,
                    "argument": {
                      "type": "Literal",
                      "start": 145,
                      "end": 146,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 183,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 183,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 183,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 400,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 264,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 257,
                "end": 263
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 324,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 287,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 287,
              "end": 324,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 324,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 308,
                    "end": 318,
                    "argument": {
                      "type": "Literal",
                      "start": 315,
                      "end": 317,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 289,
                "end": 297,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 291,
                  "end": 297
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 330,
            "end": 366,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 366,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 366,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 364,
                    "argument": {
                      "type": "Literal",
                      "start": 362,
                      "end": 363,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 398,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 391,
              "end": 398,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 395,
                "end": 398,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 219,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 228,
        "end": 232,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
