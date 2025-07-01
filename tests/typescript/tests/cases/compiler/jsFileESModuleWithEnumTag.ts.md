__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 80
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OnPush",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 93
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 95,
                  "end": 96
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 87,
                "end": 96
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 109,
                  "end": 110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 110
              }
            ],
            "start": 83,
            "end": 113
          },
          "definite": false,
          "start": 57,
          "end": 113
        }
      ],
      "declare": false,
      "start": 51,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 138
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 162
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "OnPush",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 139,
            "end": 169
          },
          "optional": false,
          "computed": true,
          "start": 115,
          "end": 170
        },
        "right": {
          "type": "Literal",
          "value": "OnPush",
          "raw": "'OnPush'",
          "start": 173,
          "end": 181
        },
        "start": 115,
        "end": 181
      },
      "directive": null,
      "start": 115,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 206
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 230
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Default",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 238
            },
            "optional": false,
            "computed": false,
            "start": 207,
            "end": 238
          },
          "optional": false,
          "computed": true,
          "start": 183,
          "end": 239
        },
        "right": {
          "type": "Literal",
          "value": "Default",
          "raw": "'Default'",
          "start": 242,
          "end": 251
        },
        "start": 183,
        "end": 251
      },
      "directive": null,
      "start": 183,
      "end": 252
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 259
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 274
          },
          "optional": false,
          "computed": false,
          "start": 253,
          "end": 274
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 298
          },
          {
            "type": "Literal",
            "value": "aField",
            "raw": "\"aField\"",
            "start": 300,
            "end": 308
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 316
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 318,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 320
              }
            ],
            "start": 310,
            "end": 321
          }
        ],
        "optional": false,
        "start": 253,
        "end": 322
      },
      "directive": null,
      "start": 253,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ChangeDetectionStrategy",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 369
        },
        "property": {
          "type": "Literal",
          "value": "bField",
          "raw": "\"bField\"",
          "start": 370,
          "end": 378
        },
        "optional": false,
        "computed": true,
        "start": 346,
        "end": 379
      },
      "directive": null,
      "start": 346,
      "end": 380
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 381
}
```
