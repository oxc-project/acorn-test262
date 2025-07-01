__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Calculator",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 23
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
                "name": "handleChar",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 40
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
                  "start": 43,
                  "end": 45
                },
                "expression": false,
                "start": 40,
                "end": 45
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 30,
              "end": 45
            }
          ],
          "start": 24,
          "end": 47
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 69
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
          "start": 72,
          "end": 76
        },
        "expression": false,
        "start": 56,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 49,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 99
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
          "start": 102,
          "end": 106
        },
        "expression": false,
        "start": 85,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 78,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
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
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "calc",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 26
          },
          "importKind": "value",
          "start": 8,
          "end": 26
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 38
          },
          "importKind": "value",
          "start": 28,
          "end": 38
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 51
          },
          "importKind": "value",
          "start": 40,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file1",
        "raw": "\"./file1\"",
        "start": 58,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 67
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "calc",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 85
            },
            "typeArguments": null,
            "arguments": [],
            "start": 77,
            "end": 87
          },
          "definite": false,
          "start": 73,
          "end": 87
        }
      ],
      "declare": false,
      "start": 69,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "handleChar",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 101
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 89,
        "end": 103
      },
      "directive": null,
      "start": 89,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 105,
        "end": 109
      },
      "directive": null,
      "start": 105,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
