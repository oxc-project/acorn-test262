__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 30,
                      "end": 33
                    },
                    "start": 28,
                    "end": 33
                  },
                  "start": 22,
                  "end": 33
                },
                "init": null,
                "definite": false,
                "start": 22,
                "end": 33
              }
            ],
            "declare": false,
            "start": 18,
            "end": 34
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 72
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 81
                      },
                      "optional": false,
                      "computed": false,
                      "start": 66,
                      "end": 81
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 85,
                        "end": 88
                      },
                      "expression": false,
                      "start": 82,
                      "end": 88
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 65,
                    "end": 88
                  }
                ],
                "start": 55,
                "end": 94
              },
              "abstract": false,
              "declare": false,
              "start": 47,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 94
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "typeArguments": null,
                "arguments": [],
                "start": 100,
                "end": 105
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 122
                },
                "optional": false,
                "computed": false,
                "start": 107,
                "end": 122
              },
              "optional": false,
              "computed": true,
              "start": 99,
              "end": 123
            },
            "directive": null,
            "start": 99,
            "end": 124
          }
        ],
        "start": 12,
        "end": 126
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 133,
            "end": 136
          },
          "typeArguments": null,
          "arguments": [],
          "start": 129,
          "end": 136
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 153
        },
        "optional": false,
        "computed": true,
        "start": 128,
        "end": 154
      },
      "directive": null,
      "start": 128,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
