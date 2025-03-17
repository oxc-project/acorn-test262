__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 33,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 29,
          "end": 30,
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 70,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 68,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 62,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 54,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 62,
                    "name": "dispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 63,
                  "end": 68,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 66,
                    "end": 68,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "using",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 94,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 100,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 104,
              "end": 105,
              "value": 3,
              "raw": "3"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 108,
      "end": 125,
      "declaration": {
        "type": "Literal",
        "start": 123,
        "end": 124,
        "value": 4,
        "raw": "4"
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 150,
        "callee": {
          "type": "MemberExpression",
          "start": 127,
          "end": 138,
          "object": {
            "type": "Identifier",
            "start": 127,
            "end": 134,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
