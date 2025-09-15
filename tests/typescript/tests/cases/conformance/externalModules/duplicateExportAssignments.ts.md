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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 20,
            "end": 22
          },
          "definite": false,
          "start": 16,
          "end": 22
        }
      ],
      "declare": false,
      "start": 12,
      "end": 23
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "start": 24,
      "end": 35
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 46
      },
      "start": 36,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 20,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 12,
      "end": 22
    },
    {
      "type": "EmptyStatement",
      "start": 22,
      "end": 23
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "start": 24,
      "end": 35
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 46
      },
      "start": 36,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
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
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 30,
                    "end": 32
                  },
                  "definite": false,
                  "start": 26,
                  "end": 32
                }
              ],
              "declare": false,
              "start": 22,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 33
          }
        ],
        "start": 12,
        "end": 35
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 47,
            "end": 57
          }
        ],
        "start": 44,
        "end": 59
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 59
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 70
      },
      "start": 60,
      "end": 71
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "start": 72,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
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
              "value": 42,
              "raw": "42",
              "start": 34,
              "end": 36
            },
            "start": 27,
            "end": 37
          }
        ],
        "start": 24,
        "end": 39
      },
      "expression": false,
      "start": 12,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
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
              "value": 42,
              "raw": "42",
              "start": 62,
              "end": 64
            },
            "start": 55,
            "end": 65
          }
        ],
        "start": 52,
        "end": 67
      },
      "expression": false,
      "start": 40,
      "end": 67
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
      },
      "start": 68,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": "test",
            "raw": "\"test\"",
            "start": 19,
            "end": 25
          },
          "definite": false,
          "start": 15,
          "end": 25
        }
      ],
      "declare": false,
      "start": 11,
      "end": 26
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 35,
            "end": 37
          },
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "start": 39,
      "end": 50
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "start": 51,
      "end": 62
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "start": 63,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
