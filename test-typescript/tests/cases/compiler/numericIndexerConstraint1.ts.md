__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 21,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 21,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 21,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 59,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 59,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 33,
                    "end": 57,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 34,
                        "end": 47,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 47,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 41,
                            "end": 47
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      }
                    }
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
      "type": "VariableDeclaration",
      "start": 61,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 76,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 76,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 87,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 81,
              "end": 86,
              "raw": "\"one\"",
              "value": "one"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
