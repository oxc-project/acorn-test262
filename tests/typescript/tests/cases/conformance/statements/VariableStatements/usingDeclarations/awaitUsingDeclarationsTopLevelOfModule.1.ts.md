__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 88,
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 60,
                  "end": 79,
                  "object": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 79,
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 80,
                  "end": 85,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 83,
                    "end": 85,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 117,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 152,
            "end": 155,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
