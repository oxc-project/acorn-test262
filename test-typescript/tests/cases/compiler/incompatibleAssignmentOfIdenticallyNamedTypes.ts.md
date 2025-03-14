__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 15,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "T",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 99,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 99,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 97,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 97,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 80,
                    "end": 91,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 80,
                      "end": 90,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 80,
                        "end": 86,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 80,
                          "end": 84
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ]
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
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
  "sourceType": "script",
  "hashbang": null
}
```
