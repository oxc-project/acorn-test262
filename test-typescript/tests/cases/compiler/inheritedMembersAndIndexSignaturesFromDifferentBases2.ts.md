inheritedMembersAndIndexSignaturesFromDifferentBases2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 38,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 36,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 70,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 110,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 94,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 97,
          "end": 106,
          "expression": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 98,
            "end": 106,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
