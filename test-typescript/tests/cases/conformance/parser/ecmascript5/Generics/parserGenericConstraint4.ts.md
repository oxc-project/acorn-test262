parserGenericConstraint4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 38,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 32,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 32,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 22,
                "end": 32,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 23,
                    "end": 30,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 27,
                      "end": 30,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 28,
                          "end": 29,
                          "typeName": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 29,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 27,
                      "decorators": [],
                      "name": "List",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 22,
                "decorators": [],
                "name": "List",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
