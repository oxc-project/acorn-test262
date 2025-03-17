__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 96,
            "name": "iterableWithOptionalIterator",
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
                    "key": {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 72,
                      "object": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 63,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 72,
                        "name": "iterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 78,
                        "end": 94,
                        "typeName": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 86,
                          "name": "Iterator",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 99,
      "end": 146,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 109,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 113,
        "end": 141,
        "name": "iterableWithOptionalIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
