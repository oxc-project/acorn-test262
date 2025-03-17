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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 31,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 26,
              "name": "a0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 70,
              "name": "a1_accessor_storage"
            },
            "value": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 80,
            "end": 96,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 122,
              "end": 142,
              "name": "a2_accessor_storage"
            },
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 183,
                  "name": "C3_Inner",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 303,
                  "body": [
                    {
                      "type": "AccessorProperty",
                      "start": 198,
                      "end": 214,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "value": 2,
                        "raw": "2"
                      },
                      "computed": false,
                      "static": false,
                      "decorators": [],
                      "definite": false,
                      "typeAnnotation": null,
                      "accessibility": null,
                      "declare": false,
                      "optional": false,
                      "override": false,
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
                              "name": "C3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              }
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "name": "C4_1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 324,
        "end": 355,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 330,
            "end": 353,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 348,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 351,
              "end": 352,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 367,
        "name": "C4_2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 368,
        "end": 399,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 374,
            "end": 397,
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 395,
              "end": 396,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
