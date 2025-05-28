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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 47,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 47,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 45,
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
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 45,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 45,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 76,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "value": "./file1",
        "raw": "\"./file1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 63,
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
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 63,
        "value": "./file1",
        "raw": "\"./file1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 90,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
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
            "callee": {
              "type": "Identifier",
              "start": 77,
              "end": 87,
              "decorators": [],
              "name": "Calculator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 105,
        "callee": {
          "type": "MemberExpression",
          "start": 91,
          "end": 103,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 103,
            "decorators": [],
            "name": "handleChar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
