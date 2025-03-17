__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
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
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 51,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 53,
                "end": 85,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 60,
                  "end": 79,
                  "object": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 79,
                    "name": "asyncDispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 80,
                  "end": 85,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 83,
                    "end": 85,
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
      "kind": "await using",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 101,
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
      "start": 104,
      "end": 123,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 123,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 117,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 121,
              "end": 122,
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
      "start": 125,
      "end": 142,
      "declaration": {
        "type": "Literal",
        "start": 140,
        "end": 141,
        "value": 4,
        "raw": "4"
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 144,
        "end": 167,
        "callee": {
          "type": "MemberExpression",
          "start": 144,
          "end": 155,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 151,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 152,
            "end": 155,
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
            "start": 156,
            "end": 157,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 165,
            "end": 166,
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
