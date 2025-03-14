__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 26,
              "decorators": [],
              "name": "a0",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 75,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 70,
              "name": "a1_accessor_storage"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 80,
            "end": 96,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 147,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 122,
              "end": 142,
              "name": "a2_accessor_storage"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "StaticBlock",
            "start": 152,
            "end": 309,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 169,
                "end": 303,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 303,
                  "body": [
                    {
                      "type": "AccessorProperty",
                      "start": 198,
                      "end": 214,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "decorators": [],
                        "name": "a2",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "StaticBlock",
                      "start": 227,
                      "end": 293,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 252,
                          "end": 279,
                          "expression": {
                            "type": "BinaryExpression",
                            "start": 252,
                            "end": 278,
                            "operator": "in",
                            "left": {
                              "type": "PrivateIdentifier",
                              "start": 252,
                              "end": 272,
                              "name": "a2_accessor_storage"
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 278,
                              "decorators": [],
                              "name": "C3",
                              "optional": false
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 183,
                  "decorators": [],
                  "name": "C3_Inner",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 355,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 324,
        "end": 355,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 330,
            "end": 353,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 348,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 351,
              "end": 352,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "decorators": [],
        "name": "C4_1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 399,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 368,
        "end": 399,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 374,
            "end": 397,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 395,
              "end": 396,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 367,
        "decorators": [],
        "name": "C4_2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
