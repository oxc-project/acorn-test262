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
        "name": "EventTarget",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 44,
        "name": "BaseEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "EventTarget",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
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
      "start": 75,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 88,
        "name": "MyEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 120,
        "end": 129,
        "name": "BaseEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 146,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 142,
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 110,
                "name": "EventTarget",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 171,
        "name": "BaseEventWrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "BaseEvent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
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
      "start": 195,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 215,
        "name": "MyEventWrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 240,
        "name": "BaseEventWrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 352,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 263,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "MyEvent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "accessibility": null
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
