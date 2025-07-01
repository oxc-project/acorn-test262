__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 15,
        "end": 17
      },
      "exportKind": "value",
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 27
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
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 46
              },
              "start": 36,
              "end": 47
            }
          ],
          "start": 30,
          "end": 49
        },
        "expression": false,
        "start": 15,
        "end": 49
      },
      "exportKind": "value",
      "start": 0,
      "end": 49
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "definite": false,
            "start": 63,
            "end": 70
          }
        ],
        "declare": false,
        "start": 57,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 84
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 91
          },
          "exportKind": "value",
          "start": 81,
          "end": 91
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 72,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 24
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
                "start": 31,
                "end": 32
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 54,
                "end": 58
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 31,
              "end": 60
            }
          ],
          "start": 25,
          "end": 62
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 62
      },
      "exportKind": "value",
      "start": 0,
      "end": 62
    },
    {
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 84
            },
            "definite": false,
            "start": 77,
            "end": 84
          }
        ],
        "declare": false,
        "start": 71,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 64,
      "end": 85
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 105
          },
          "exportKind": "value",
          "start": 95,
          "end": 105
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 86,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fab",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index3",
        "raw": "\"./index3\"",
        "start": 16,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fab",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 79,
              "end": 83
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 56,
            "end": 85
          }
        ],
        "start": 50,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 87
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
      },
      "exportKind": "value",
      "start": 88,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 50,
        "end": 52
      },
      "exportKind": "value",
      "start": 35,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 100
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 66
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 69,
          "end": 71
        },
        "expression": false,
        "start": 53,
        "end": 71
      },
      "exportKind": "value",
      "start": 38,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 38,
  "end": 118
}
```
