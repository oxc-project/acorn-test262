__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 33,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 13,
                  "end": 27,
                  "object": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 19,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 27,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 28,
                  "end": 33,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 31,
                    "end": 33,
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
      "start": 38,
      "end": 50,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 52,
        "end": 69,
        "callee": {
          "type": "MemberExpression",
          "start": 52,
          "end": 63,
          "object": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
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
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 82,
      "expression": {
        "type": "Literal",
        "start": 80,
        "end": 81,
        "value": 4,
        "raw": "4"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
