exhaustiveSwitchWithWideningLiteralTypes.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 273,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 56,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "raw": "\"A\"",
              "value": "A"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 120,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 116,
              "end": 119,
              "raw": "\"B\"",
              "value": "B"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 273,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 273,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 189,
            "end": 271,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 218,
                "end": 237,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 237,
                    "argument": {
                      "type": "Literal",
                      "start": 235,
                      "end": 236,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 223,
                  "end": 226,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              {
                "type": "SwitchCase",
                "start": 246,
                "end": 265,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 256,
                    "end": 265,
                    "argument": {
                      "type": "Literal",
                      "start": 263,
                      "end": 264,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 251,
                  "end": 254,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 196,
              "end": 206,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 201,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "kind",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 173,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 173,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 168,
              "end": 173,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 168,
                  "end": 169,
                  "typeName": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 172,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 174,
        "end": 182,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 176,
          "end": 182
        }
      }
    }
  ],
  "sourceType": "script"
}
```
