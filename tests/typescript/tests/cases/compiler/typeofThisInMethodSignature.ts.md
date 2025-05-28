__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 102,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 77,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 77,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 77,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 40,
              "end": 45,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 44,
                "end": 45,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 75,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 75,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 49,
                    "end": 65,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 68,
                    "end": 72
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 75,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
