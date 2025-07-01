__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "exportKind": "value",
          "start": 29,
          "end": 30
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 54
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 62
                  },
                  "optional": false,
                  "computed": false,
                  "start": 48,
                  "end": 62
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
                    "start": 66,
                    "end": 68
                  },
                  "expression": false,
                  "start": 63,
                  "end": 68
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 47,
                "end": 68
              }
            ],
            "start": 45,
            "end": 70
          },
          "definite": false,
          "start": 41,
          "end": 70
        }
      ],
      "declare": false,
      "start": 35,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 83,
            "end": 84
          },
          "definite": false,
          "start": 79,
          "end": 84
        }
      ],
      "declare": false,
      "start": 73,
      "end": 85
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "init": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 104,
              "end": 105
            },
            "definite": false,
            "start": 100,
            "end": 105
          }
        ],
        "declare": false,
        "start": 94,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 106
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 4,
        "raw": "4",
        "start": 123,
        "end": 124
      },
      "exportKind": "value",
      "start": 108,
      "end": 125
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 127,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          }
        ],
        "optional": false,
        "start": 127,
        "end": 150
      },
      "directive": null,
      "start": 127,
      "end": 151
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
