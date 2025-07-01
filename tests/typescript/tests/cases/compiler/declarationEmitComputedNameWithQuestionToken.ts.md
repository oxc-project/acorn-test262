__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "something",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "start": 12,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 57
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "data-",
                      "cooked": "data-"
                    },
                    "tail": false,
                    "start": 60,
                    "end": 68
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 77,
                    "end": 79
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 77
                  }
                ],
                "start": 60,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 88
                },
                "typeArguments": null,
                "start": 83,
                "end": 88
              },
              "start": 60,
              "end": 88
            },
            "definite": false,
            "start": 44,
            "end": 88
          }
        ],
        "declare": false,
        "start": 38,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 89
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithData",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 112
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
                "type": "Identifier",
                "decorators": [],
                "name": "dataSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 133
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
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "something",
                        "raw": "\"something\"",
                        "start": 155,
                        "end": 166
                      },
                      "start": 148,
                      "end": 167
                    }
                  ],
                  "start": 138,
                  "end": 173
                },
                "expression": false,
                "start": 135,
                "end": 173
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": true,
              "accessibility": null,
              "start": 119,
              "end": 173
            }
          ],
          "start": 113,
          "end": 175
        },
        "abstract": false,
        "declare": false,
        "start": 98,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 175
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 207
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 195,
                    "end": 209
                  },
                  "property": {
                    "type": "Literal",
                    "value": "ahahahaahah",
                    "raw": "\"ahahahaahah\"",
                    "start": 211,
                    "end": 224
                  },
                  "optional": false,
                  "computed": true,
                  "start": 194,
                  "end": 225
                },
                "start": 194,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 194,
              "end": 228
            },
            "definite": false,
            "start": 190,
            "end": 228
          }
        ],
        "declare": false,
        "start": 184,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 177,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
