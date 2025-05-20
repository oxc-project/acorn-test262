__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 47,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 45,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 40,
                "decorators": [],
                "name": "handleChar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 45,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 45,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Calculator",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 56,
        "end": 76,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 76,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 63,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 63,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 47,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 73,
            "end": 89,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 77,
              "end": 87,
              "decorators": [],
              "name": "Calculator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 105,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 91,
          "end": 103,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 103,
            "decorators": [],
            "name": "handleChar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
