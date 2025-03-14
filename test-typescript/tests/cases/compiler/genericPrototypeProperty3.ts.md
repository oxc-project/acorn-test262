__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 33,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "decorators": [],
              "name": "target",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 30,
                "end": 32,
                "members": []
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "BaseEvent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 162,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 150,
            "end": 160,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "decorators": [],
              "name": "target",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "decorators": [],
        "name": "MyEvent",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "BaseEvent",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 50,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 207,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 192,
            "end": 205,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 204,
                  "decorators": [],
                  "name": "BaseEvent",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 185,
        "decorators": [],
        "name": "BaseEventWrapper",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 209,
      "end": 279,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 255,
        "end": 279,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 261,
            "end": 277,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 276,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 271,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 272,
                      "end": 275
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 271,
                  "decorators": [],
                  "name": "MyEvent",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 229,
        "decorators": [],
        "name": "MyEventWrapper",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 238,
        "end": 254,
        "decorators": [],
        "name": "BaseEventWrapper",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
