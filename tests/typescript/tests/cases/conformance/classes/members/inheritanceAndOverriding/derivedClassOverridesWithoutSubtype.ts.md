__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 48,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 30,
                    "end": 42,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 33,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 115,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 65,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 115,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 113,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 88,
                "end": 113,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 98,
                    "end": 107,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 101,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 175,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 128,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 175,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 173,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 145,
                "end": 173,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 155,
                    "end": 167,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 158,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 158,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 160,
                        "end": 166
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 177,
      "end": 249,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 247,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 222,
                "end": 247,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 232,
                    "end": 241,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 235,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 237,
                        "end": 240
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
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
