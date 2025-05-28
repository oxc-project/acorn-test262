__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 26,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 11,
                    "end": 24,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 12,
                        "end": 22,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17,
                          "end": 22,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 19,
                            "end": 22
                          }
                        }
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 82,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 62,
                "end": 82,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 64,
                    "end": 80,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 78,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 78,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 72,
                            "end": 78,
                            "typeName": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "decorators": [],
                              "name": "RegExp",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
