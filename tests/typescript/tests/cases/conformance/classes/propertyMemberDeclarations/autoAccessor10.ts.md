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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 26,
              "decorators": [],
              "name": "a0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 98,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 75,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 70,
              "name": "a1_accessor_storage"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 80,
            "end": 96,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 311,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 122,
              "end": 142,
              "name": "a2_accessor_storage"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
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
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 183,
                  "decorators": [],
                  "name": "C3_Inner",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 303,
                  "body": [
                    {
                      "type": "AccessorProperty",
                      "start": 198,
                      "end": 214,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "value": 2,
                        "raw": "2"
                      },
                      "computed": false,
                      "static": false,
                      "override": false,
                      "definite": false,
                      "accessibility": null,
                      "declare": false,
                      "optional": false,
                      "readonly": false
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
                            "left": {
                              "type": "PrivateIdentifier",
                              "start": 252,
                              "end": 272,
                              "name": "a2_accessor_storage"
                            },
                            "operator": "in",
                            "right": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 278,
                              "decorators": [],
                              "name": "C3",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 355,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "decorators": [],
        "name": "C4_1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 324,
        "end": 355,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 330,
            "end": 353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 348,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 351,
              "end": 352,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 399,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 367,
        "decorators": [],
        "name": "C4_2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 368,
        "end": 399,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 374,
            "end": 397,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 395,
              "end": 396,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
