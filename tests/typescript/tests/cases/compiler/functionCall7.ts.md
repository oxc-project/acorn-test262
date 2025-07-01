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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 27
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 37,
                      "end": 38
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 30,
                    "end": 39
                  }
                ],
                "start": 28,
                "end": 41
              },
              "abstract": false,
              "declare": false,
              "start": 19,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12,
            "end": 41
          }
        ],
        "start": 10,
        "end": 42
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 63
                },
                "start": 58,
                "end": 63
              },
              "typeArguments": null,
              "start": 58,
              "end": 63
            },
            "start": 57,
            "end": 63
          },
          "start": 56,
          "end": 63
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 67
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "optional": false,
                "computed": false,
                "start": 66,
                "end": 69
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 72,
                "end": 73
              },
              "start": 66,
              "end": 73
            },
            "directive": null,
            "start": 66,
            "end": 74
          }
        ],
        "start": 64,
        "end": 76
      },
      "expression": false,
      "start": 43,
      "end": 76
    },
    {
      "type": "EmptyStatement",
      "start": 76,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 95
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 98
              },
              "optional": false,
              "computed": false,
              "start": 93,
              "end": 98
            },
            "typeArguments": null,
            "arguments": [],
            "start": 89,
            "end": 100
          },
          "definite": false,
          "start": 83,
          "end": 100
        }
      ],
      "declare": false,
      "start": 79,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 106
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 110
          }
        ],
        "optional": false,
        "start": 103,
        "end": 111
      },
      "directive": null,
      "start": 103,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 117
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 121
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 126
          }
        ],
        "optional": false,
        "start": 114,
        "end": 127
      },
      "directive": null,
      "start": 114,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 134,
            "end": 135
          }
        ],
        "optional": false,
        "start": 130,
        "end": 136
      },
      "directive": null,
      "start": 130,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 141
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 138,
        "end": 143
      },
      "directive": null,
      "start": 138,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
