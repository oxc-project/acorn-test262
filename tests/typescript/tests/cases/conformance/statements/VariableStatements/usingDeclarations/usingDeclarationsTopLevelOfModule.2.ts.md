__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 6,
            "end": 7
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
                    "start": 13,
                    "end": 19
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 20,
                    "end": 27
                  },
                  "optional": false,
                  "computed": false,
                  "start": 13,
                  "end": 27
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
                    "start": 31,
                    "end": 33
                  },
                  "expression": false,
                  "start": 28,
                  "end": 33
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 12,
                "end": 33
              }
            ],
            "start": 10,
            "end": 35
          },
          "definite": false,
          "start": 6,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
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
            "start": 44,
            "end": 45
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 48,
            "end": 49
          },
          "definite": false,
          "start": 44,
          "end": 49
        }
      ],
      "declare": false,
      "start": 38,
      "end": 50
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
            "start": 52,
            "end": 59
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 52,
          "end": 63
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          }
        ],
        "optional": false,
        "start": 52,
        "end": 69
      },
      "directive": null,
      "start": 52,
      "end": 70
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Literal",
        "value": 4,
        "raw": "4",
        "start": 80,
        "end": 81
      },
      "start": 71,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
