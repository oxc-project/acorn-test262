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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
              },
              "start": 245,
              "end": 253
            },
            "start": 244,
            "end": 253
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 259
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 268
            },
            "optional": false,
            "computed": true,
            "start": 256,
            "end": 269
          },
          "definite": false,
          "start": 244,
          "end": 269
        }
      ],
      "declare": false,
      "start": 238,
      "end": 270
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 277,
            "end": 286
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 299
            },
            "optional": false,
            "computed": true,
            "start": 289,
            "end": 300
          },
          "definite": false,
          "start": 277,
          "end": 300
        }
      ],
      "declare": false,
      "start": 271,
      "end": 301
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 323
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 330
            },
            "optional": false,
            "computed": true,
            "start": 320,
            "end": 331
          },
          "definite": false,
          "start": 308,
          "end": 331
        }
      ],
      "declare": false,
      "start": 302,
      "end": 332
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "start": 339,
            "end": 348
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 354
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "dashStrMem",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 365
            },
            "optional": false,
            "computed": true,
            "start": 351,
            "end": 366
          },
          "definite": false,
          "start": 339,
          "end": 366
        }
      ],
      "declare": false,
      "start": 333,
      "end": 367
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 367
}
```
