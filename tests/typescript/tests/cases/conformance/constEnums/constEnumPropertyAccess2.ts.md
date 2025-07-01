__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 237
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 248,
              "end": 249
            },
            "computed": false,
            "start": 244,
            "end": 249
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 259,
              "end": 260
            },
            "computed": false,
            "start": 255,
            "end": 260
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "start": 270,
              "end": 275
            },
            "computed": false,
            "start": 266,
            "end": 275
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 289,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "computed": false,
            "start": 281,
            "end": 290
          }
        ],
        "start": 238,
        "end": 292
      },
      "const": true,
      "declare": false,
      "start": 225,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "definite": false,
          "start": 380,
          "end": 385
        }
      ],
      "declare": false,
      "start": 376,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 393
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "optional": false,
              "computed": false,
              "start": 398,
              "end": 401
            },
            "optional": false,
            "computed": true,
            "start": 396,
            "end": 402
          },
          "definite": false,
          "start": 391,
          "end": 402
        }
      ],
      "declare": false,
      "start": 387,
      "end": 403
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "typeArguments": null,
                "start": 411,
                "end": 412
              },
              "start": 409,
              "end": 412
            },
            "start": 408,
            "end": 412
          },
          "init": null,
          "definite": false,
          "start": 408,
          "end": 412
        }
      ],
      "declare": false,
      "start": 404,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 418,
          "end": 426
        },
        "start": 414,
        "end": 426
      },
      "directive": null,
      "start": 414,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 440
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "typeArguments": null,
              "start": 444,
              "end": 445
            },
            "start": 442,
            "end": 445
          },
          "start": 441,
          "end": 445
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 447,
        "end": 450
      },
      "expression": false,
      "start": 428,
      "end": 450
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
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 452
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "optional": false,
          "computed": false,
          "start": 451,
          "end": 454
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 457,
          "end": 458
        },
        "start": 451,
        "end": 458
      },
      "directive": null,
      "start": 451,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 225,
  "end": 459
}
```
