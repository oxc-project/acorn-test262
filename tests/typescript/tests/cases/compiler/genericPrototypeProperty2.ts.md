__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "EventTarget",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 73,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 44,
        "decorators": [],
        "name": "BaseEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 70,
                  "decorators": [],
                  "name": "EventTarget",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 75,
      "end": 148,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 88,
        "decorators": [],
        "name": "MyEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 88,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 110,
                "decorators": [],
                "name": "EventTarget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 120,
        "end": 129,
        "decorators": [],
        "name": "BaseEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 146,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 142,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 149,
      "end": 193,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 171,
        "decorators": [],
        "name": "BaseEventWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 190,
                  "decorators": [],
                  "name": "BaseEvent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 195,
      "end": 352,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 215,
        "decorators": [],
        "name": "MyEventWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 240,
        "decorators": [],
        "name": "BaseEventWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 352,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 263,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 257,
                  "decorators": [],
                  "name": "MyEvent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 257,
                  "end": 262,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 258,
                      "end": 261
                    }
                  ]
                }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
