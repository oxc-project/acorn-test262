__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 80,
            "decorators": [],
            "name": "iterableWithOptionalIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 34,
                "end": 80,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 40,
                    "end": 78,
                    "accessibility": null,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 41,
                      "end": 56,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 47,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 56,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 78,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 70,
                          "end": 78,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 71,
                              "end": 77
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 70,
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
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
      "start": 83,
      "end": 130,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 130,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 88,
        "end": 93,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 92,
            "end": 93,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 97,
        "end": 125,
        "decorators": [],
        "name": "iterableWithOptionalIterator",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
