__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 103,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 77,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 77,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 77,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 40,
              "end": 45,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 44,
                "end": 45,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 75,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 75,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 65,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 52,
                        "end": 65,
                        "exprName": {
                          "type": "TSQualifiedName",
                          "start": 59,
                          "end": 65,
                          "left": {
                            "type": "ThisExpression",
                            "start": 59,
                            "end": 63
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 75,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 68,
                    "end": 72
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 89,
            "end": 101,
            "callee": {
              "type": "MemberExpression",
              "start": 89,
              "end": 98,
              "object": {
                "type": "NewExpression",
                "start": 89,
                "end": 96,
                "callee": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
