__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 17,
        "raw": "12",
        "value": 12
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 49,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 49,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 36,
              "end": 47,
              "argument": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 94,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 81,
          "end": 91,
          "exported": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 81,
            "end": 84,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 62,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 62,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 62,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 60,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 54,
                "end": 58,
                "raw": "null",
                "value": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 71,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 84,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 86,
      "end": 108,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 95,
          "end": 105,
          "exported": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 26,
        "raw": "\"./index3\"",
        "value": "./index3"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "Fab",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 79,
              "end": 83,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Fab",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 88,
      "end": 107,
      "declaration": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 100,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 35,
      "end": 53,
      "declaration": {
        "type": "Literal",
        "start": 50,
        "end": 52,
        "raw": "12",
        "value": 12
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 118,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 38,
      "end": 71,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 53,
        "end": 71,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 69,
          "end": 71,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 66,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
