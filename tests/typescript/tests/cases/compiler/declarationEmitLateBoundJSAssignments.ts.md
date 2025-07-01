__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 24
        },
        "expression": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 35,
          "end": 37
        },
        "start": 25,
        "end": 37
      },
      "directive": null,
      "start": 25,
      "end": 38
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
            "name": "_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 56,
            "end": 64
          },
          "definite": false,
          "start": 45,
          "end": 64
        }
      ],
      "declare": false,
      "start": 39,
      "end": 65
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 78
          },
          "optional": false,
          "computed": true,
          "start": 66,
          "end": 79
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 82,
          "end": 86
        },
        "start": 66,
        "end": 86
      },
      "directive": null,
      "start": 66,
      "end": 87
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
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "init": {
            "type": "Literal",
            "value": "strMemName",
            "raw": "\"strMemName\"",
            "start": 103,
            "end": 115
          },
          "definite": false,
          "start": 94,
          "end": 115
        }
      ],
      "declare": false,
      "start": 88,
      "end": 116
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 127
          },
          "optional": false,
          "computed": true,
          "start": 117,
          "end": 128
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 131,
          "end": 135
        },
        "start": 117,
        "end": 135
      },
      "directive": null,
      "start": 117,
      "end": 136
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
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 153
          },
          "init": {
            "type": "Literal",
            "value": "dashed-str-mem",
            "raw": "\"dashed-str-mem\"",
            "start": 156,
            "end": 172
          },
          "definite": false,
          "start": 143,
          "end": 172
        }
      ],
      "declare": false,
      "start": 137,
      "end": 173
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 188
          },
          "optional": false,
          "computed": true,
          "start": 174,
          "end": 189
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 192,
          "end": 196
        },
        "start": 174,
        "end": 196
      },
      "directive": null,
      "start": 174,
      "end": 197
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
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 210
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 213,
            "end": 215
          },
          "definite": false,
          "start": 204,
          "end": 215
        }
      ],
      "declare": false,
      "start": 198,
      "end": 216
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 227
          },
          "optional": false,
          "computed": true,
          "start": 217,
          "end": 228
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 231,
          "end": 235
        },
        "start": 217,
        "end": 235
      },
      "directive": null,
      "start": 217,
      "end": 236
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 273
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 282
            },
            "optional": false,
            "computed": true,
            "start": 270,
            "end": 283
          },
          "definite": false,
          "start": 266,
          "end": 283
        }
      ],
      "declare": false,
      "start": 260,
      "end": 284
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
            "start": 313,
            "end": 314
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 320
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 327
            },
            "optional": false,
            "computed": true,
            "start": 317,
            "end": 328
          },
          "definite": false,
          "start": 313,
          "end": 328
        }
      ],
      "declare": false,
      "start": 307,
      "end": 329
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 359
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 365
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 372
            },
            "optional": false,
            "computed": true,
            "start": 362,
            "end": 373
          },
          "definite": false,
          "start": 358,
          "end": 373
        }
      ],
      "declare": false,
      "start": 352,
      "end": 374
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 410
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "dashStrMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 421
            },
            "optional": false,
            "computed": true,
            "start": 407,
            "end": 422
          },
          "definite": false,
          "start": 403,
          "end": 422
        }
      ],
      "declare": false,
      "start": 397,
      "end": 423
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
