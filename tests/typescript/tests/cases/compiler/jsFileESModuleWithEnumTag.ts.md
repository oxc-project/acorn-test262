__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 114,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 80,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 113,
            "properties": [
              {
                "type": "Property",
                "start": 87,
                "end": 96,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "OnPush",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 110,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "decorators": [],
                  "name": "Default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "ExpressionStatement",
      "start": 115,
      "end": 182,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 170,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 138,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 139,
            "end": 169,
            "object": {
              "type": "Identifier",
              "start": 139,
              "end": 162,
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "OnPush",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 173,
          "end": 181,
          "value": "OnPush",
          "raw": "'OnPush'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 252,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 183,
          "end": 239,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 206,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 207,
            "end": 238,
            "object": {
              "type": "Identifier",
              "start": 207,
              "end": 230,
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 231,
              "end": 238,
              "decorators": [],
              "name": "Default",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 242,
          "end": 251,
          "value": "Default",
          "raw": "'Default'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 323,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 322,
        "callee": {
          "type": "MemberExpression",
          "start": 253,
          "end": 274,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 260,
            "end": 274,
            "decorators": [],
            "name": "defineProperty",
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
            "start": 275,
            "end": 298,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 300,
            "end": 308,
            "value": "aField",
            "raw": "\"aField\""
          },
          {
            "type": "ObjectExpression",
            "start": 310,
            "end": 321,
            "properties": [
              {
                "type": "Property",
                "start": 311,
                "end": 320,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 316,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 318,
                  "end": 320,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 380,
      "expression": {
        "type": "MemberExpression",
        "start": 346,
        "end": 379,
        "object": {
          "type": "Identifier",
          "start": 346,
          "end": 369,
          "decorators": [],
          "name": "ChangeDetectionStrategy",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 370,
          "end": 378,
          "value": "bField",
          "raw": "\"bField\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
