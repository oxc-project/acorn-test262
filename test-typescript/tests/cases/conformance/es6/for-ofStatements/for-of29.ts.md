for-of29.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 96,
            "decorators": [],
            "name": "iterableWithOptionalIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 50,
                "end": 96,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 56,
                    "end": 94,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 72,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 63,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 72,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 78,
                        "end": 94,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 86,
                          "end": 94,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 87,
                              "end": 93
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 86,
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 99,
      "end": 146,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 109,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 109,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 113,
        "end": 141,
        "decorators": [],
        "name": "iterableWithOptionalIterator",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
