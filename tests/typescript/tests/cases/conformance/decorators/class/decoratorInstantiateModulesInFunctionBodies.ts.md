__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "init": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 32,
              "end": 37
            },
            "definite": false,
            "start": 25,
            "end": 37
          }
        ],
        "declare": false,
        "start": 21,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 14,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 14,
  "end": 39
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 21,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 44
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 54,
              "end": 57
            },
            "start": 52,
            "end": 57
          },
          "start": 45,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "start": 82,
                  "end": 93
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 108,
                      "end": 114
                    },
                    "start": 106,
                    "end": 114
                  },
                  "start": 95,
                  "end": 114
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 116,
                "end": 138
              },
              "expression": false,
              "start": 72,
              "end": 138
            },
            "start": 65,
            "end": 139
          }
        ],
        "start": 59,
        "end": 141
      },
      "expression": false,
      "start": 29,
      "end": 141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wat",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 166
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 177
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 181,
                          "end": 186
                        },
                        "start": 173,
                        "end": 186
                      },
                      "id": null,
                      "generator": false,
                      "start": 167,
                      "end": 186
                    }
                  ],
                  "optional": false,
                  "start": 160,
                  "end": 187
                },
                "start": 159,
                "end": 187
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whatever",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 207
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
                "start": 210,
                "end": 232
              },
              "expression": false,
              "start": 207,
              "end": 232
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 232
          }
        ],
        "start": 153,
        "end": 234
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 234
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 234
}
```
