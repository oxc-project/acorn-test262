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
        "start": 10,
        "end": 12
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
                "start": 28,
                "end": 30
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
                      "start": 40,
                      "end": 41
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
                    "start": 33,
                    "end": 42
                  }
                ],
                "start": 31,
                "end": 44
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 44
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 44
          }
        ],
        "start": 13,
        "end": 45
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 58
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
                  "start": 61,
                  "end": 63
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 66
                },
                "start": 61,
                "end": 66
              },
              "typeArguments": null,
              "start": 61,
              "end": 66
            },
            "start": 60,
            "end": 66
          },
          "start": 59,
          "end": 66
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
                  "start": 69,
                  "end": 70
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "optional": false,
                "computed": false,
                "start": 69,
                "end": 72
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 75,
                "end": 76
              },
              "start": 69,
              "end": 76
            },
            "directive": null,
            "start": 69,
            "end": 77
          }
        ],
        "start": 67,
        "end": 79
      },
      "expression": false,
      "start": 46,
      "end": 79
    },
    {
      "type": "EmptyStatement",
      "start": 79,
      "end": 80
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
            "start": 86,
            "end": 89
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
                "start": 96,
                "end": 98
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 96,
              "end": 101
            },
            "typeArguments": null,
            "arguments": [],
            "start": 92,
            "end": 103
          },
          "definite": false,
          "start": 86,
          "end": 103
        }
      ],
      "declare": false,
      "start": 82,
      "end": 104
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
          "start": 106,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          }
        ],
        "optional": false,
        "start": 106,
        "end": 114
      },
      "directive": null,
      "start": 106,
      "end": 115
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
          "start": 117,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myC",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 129
          }
        ],
        "optional": false,
        "start": 117,
        "end": 130
      },
      "directive": null,
      "start": 117,
      "end": 131
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
          "start": 133,
          "end": 136
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 137,
            "end": 138
          }
        ],
        "optional": false,
        "start": 133,
        "end": 139
      },
      "directive": null,
      "start": 133,
      "end": 140
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
          "start": 141,
          "end": 144
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 141,
        "end": 146
      },
      "directive": null,
      "start": 141,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 147
}
```
