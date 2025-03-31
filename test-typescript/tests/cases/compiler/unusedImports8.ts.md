__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "name": "Calculator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 47,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 45,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 40,
                "name": "handleChar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 45,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 45,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 76,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 56,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 76,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 106,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 85,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 99,
          "name": "test2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 102,
          "end": 106,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 67,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 26,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "name": "Calculator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "name": "calc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 28,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 51,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "name": "test2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 51,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 67,
        "value": "./file1",
        "raw": "\"./file1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 77,
            "end": 87,
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 85,
              "name": "calc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 104,
      "expression": {
        "type": "CallExpression",
        "start": 89,
        "end": 103,
        "callee": {
          "type": "MemberExpression",
          "start": 89,
          "end": 101,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 101,
            "name": "handleChar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 110,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 109,
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
