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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 80,
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
                    "key": {
                      "type": "MemberExpression",
                      "start": 41,
                      "end": 56,
                      "object": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 47,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 56,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "computed": true,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 78,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 70,
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "ForOfStatement",
      "start": 83,
      "end": 130,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 88,
        "end": 93,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 92,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 97,
        "end": 125,
        "decorators": [],
        "name": "iterableWithOptionalIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 130,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
