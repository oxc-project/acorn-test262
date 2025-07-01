__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 19,
                            "end": 22
                          },
                          "start": 17,
                          "end": 22
                        },
                        "start": 12,
                        "end": 22
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 11,
                    "end": 24
                  }
                ],
                "start": 9,
                "end": 26
              },
              "start": 7,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RegExp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 72,
                            "end": 78
                          },
                          "start": 70,
                          "end": 78
                        },
                        "start": 65,
                        "end": 78
                      }
                    ],
                    "typeAnnotation": null,
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 64,
                    "end": 80
                  }
                ],
                "start": 62,
                "end": 82
              },
              "start": 60,
              "end": 82
            },
            "start": 56,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 82
        }
      ],
      "declare": false,
      "start": 52,
      "end": 83
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
