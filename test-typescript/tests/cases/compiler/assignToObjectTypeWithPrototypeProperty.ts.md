assignToObjectTypeWithPrototypeProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 15,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "XEvent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "XEvent",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 32,
            "end": 48,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "XEvent",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 76,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 58,
                    "end": 75,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 67,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 69,
                        "end": 75,
                        "typeName": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 75,
                          "decorators": [],
                          "name": "XEvent",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "XEvent",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
